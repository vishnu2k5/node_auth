import User from "../models/user";
const express = require('express');
const router = express.Router();
router
    .route('/login')
    .post(async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user || user.password !== password) {
                return res.status(401).send('Invalid credentials');
            }
            res.send('Login successful!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    })
module.exports = router;