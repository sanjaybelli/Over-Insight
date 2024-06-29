const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Use body-parser for parsing JSON
app.use(bodyParser.json());

// Define a Mongoose schema for user data
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Create a Mongoose model
const User = mongoose.model('User', userSchema);

// Connect to your MongoDB database (replace 'your_database_url' with your actual database URL)
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up a route to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the database for a user with the provided username and password
    User.findOne({ username, password }, (err, user) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else if (user) {
            // User found, send a success response
            res.json({ message: 'Login successful' });
        } else {
            // User not found, send an error response
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
