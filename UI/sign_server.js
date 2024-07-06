// signup.js

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import the db.js file

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Route to handle sign up
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const checkUsernameQuery = `SELECT * FROM login_details WHERE username = ?`;
  pool.query(checkUsernameQuery, [username], (err, result) => {
    if (err) {
      console.error('Error checking username:', err);
      return res.status(500).json({ success: false, error: 'An unexpected error occurred while checking username' });
    }

    if (result.length > 0) {
      return res.status(400).json({ success: false, error: 'Username already exists' });
    }

    // Insert new user into the database
    const insertUserQuery = `INSERT INTO login_details (username, password) VALUES (?, ?)`;
    pool.query(insertUserQuery, [username, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ success: false, error: 'An unexpected error occurred while inserting user' });
      }
      console.log('User registered successfully');
      return res.status(200).json({ success: true });
    });
  });
});

module.exports = router;
