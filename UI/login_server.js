// login.js

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import the db.js file

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Route to handle login
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password match
  const checkLoginQuery = `SELECT * FROM login_details WHERE username = ? AND password = ?`;
  pool.query(checkLoginQuery, [username, password], (err, result) => {
    if (err) {
      console.error('Error checking login:', err);
      return res.status(500).json({ isAuthenticated: false, error: 'An unexpected error occurred while checking login' });
    }

    if (result.length > 0) {
      // User is authenticated
      console.log('Login successful');
      return res.status(200).json({ isAuthenticated: true });
    } else {
      // Invalid credentials
      console.log('Invalid username or password');
      return res.status(401).json({ isAuthenticated: false, error: 'Invalid username or password' });
    }
  });
});

module.exports = router;
