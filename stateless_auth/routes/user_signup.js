const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../controller/hashpasword');

router
    .route('/')
    .post(async (req, res) => {
        const { username, email, password } = req.body;

        // Basic validation to avoid Mongoose required field errors
        if (!username || !email || !password) {
            return res.status(400).send('username, email and password are required');
        }

        try {
            const user = await User.findOne({ email });
            if (user) {
                return res.status(409).send('User already exists');
            }

            const hashedPassword = await hashPassword(password);

            const newUser = new User({ username, email, password: hashedPassword });
            await newUser.save();
            res.status(201).send('User registered successfully');
        } catch (error) {
            console.error(error);
            // If validation error still bubbles up, provide clearer message
            if (error.name === 'ValidationError') {
                return res.status(400).send(error.message);
            }
            res.status(500).send('Internal server error');
        }
    });

module.exports = router;