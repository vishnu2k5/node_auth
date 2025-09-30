const express = require('express');
const mongoose = require('mongoose');
const router = express.Router({mergeParams: true});
const {handleGetRequest , handlePostRequest} = require('../controllers/info.js');

router
    .route('/')
    .get(handleGetRequest)
    .post(handlePostRequest);

module.exports = router;
