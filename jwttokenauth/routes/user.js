const express = require('express');
const router = express.Router({mergeParams: true});
const { handleUserSignup, handleUserLogin } = require('../controller/user');

router
.route('/')
.post(handleUserSignup)
.post(handleUserLogin);



module.exports = router;