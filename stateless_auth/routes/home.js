const express = require('express');
const router = express.Router();
const User = require('../models/user');
router
    .route('/')
    .get(async (req, res) => {
        try {
            const usernames = await User.find().select('username -_id');
            res.send(`Welcome to the Home Page! Users: \n ${usernames.join(', ')}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });

    module.exports = router;