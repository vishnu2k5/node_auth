const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('loginpage');
});

router.get('/signup', (req, res) => {
    res.render('signuppage');
});

router.get('/homeafterlogin', (req, res) => {
    res.render('homeaflogin');
});

module.exports = router;