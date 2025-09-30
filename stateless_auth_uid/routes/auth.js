const express = require('express');
const mongoose = require('mongoose');
const router = express.Router({mergeParams: true});

const {handelsignuprequest} = require('../controllers/users')


router
     .route('/signup')
     .post(handelsignuprequest)


module.exports = router