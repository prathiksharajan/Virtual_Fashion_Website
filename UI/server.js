//server.js
const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login_server');
const signupRouter = require('./sign_server');
const outfitRouter = require('./outfit_server'); // Import the outfitRouter

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/', outfitRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
