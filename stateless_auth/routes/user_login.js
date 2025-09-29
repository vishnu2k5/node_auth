const User = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {comparePasswords } = require('../controller/hashpasword');

router
    .route('/')
    .post(async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('email and password are required');
        }

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).send('Invalid credentials');
            }

            const match = await comparePasswords(password, user.password);
            if (!match) {
                return res.status(401).send('Invalid credentials');
            }
            res.send('Login successful!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    })
module.exports = router;