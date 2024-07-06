const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // Import body-parser
const pool = require('./db'); // Import the MySQL connection pool

// Apply body-parser middleware to the router
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Route to handle outfit recommendations submission
router.post('/submit', (req, res) => {
  // Extract data including username from the request body
  console.log("Req reached");
  const { username, occasion, stylePreferences, color, patternPreferences, currentTrends, budget, comfort, icon, dressCode } = req.body;

  console.log('Received Data:', {
    username,
    occasion,
    stylePreferences,
    color,
    patternPreferences,
    currentTrends,
    budget,
    comfort,
    icon,
    dressCode
  });

  // Ensure username is available
  if (!username) {
    return res.status(400).json({ success: false, error: 'Username is required' });
  }

  // Insert the outfit recommendations data into the database
  const insertQuery = `INSERT INTO fashquiz (entry_id, occasion, style_pref, color, pattern_pref, current_trends, budget, comfort_level, fash_icon, dress_code) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
  occasion = VALUES(occasion),
  style_pref = VALUES(style_pref),
  color = VALUES(color),
  pattern_pref = VALUES(pattern_pref),
  current_trends = VALUES(current_trends),
  budget = VALUES(budget),
  comfort_level = VALUES(comfort_level),
  fash_icon = VALUES(fash_icon),
  dress_code = VALUES(dress_code);
  `;
  const values = [username, occasion, stylePreferences, color, patternPreferences, currentTrends, budget, comfort, icon, dressCode];

  console.log('Insert query:', insertQuery); // Debugging statement
  console.log('Values:', values); 

  pool.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting outfit recommendations:', err);
      return res.status(500).json({ success: false, error: 'An unexpected error occurred while submitting outfit recommendations' });
    }
    console.log('Outfit recommendations submitted successfully');
    return res.status(200).json({ success: true, message: 'Outfit recommendations submitted successfully' });
  });
});

module.exports = router;
