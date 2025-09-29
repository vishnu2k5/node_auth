const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 3000;
const mongoose = require('mongoose');
const login = require('./routes/user_login');
const signup = require('./routes/user_signup');

mongoose.connect('mongodb://localhost:27017/user_auth')
.then(() => {console.log('Connected to MongoDB');})
.catch(err => {console.error('Failed to connect to MongoDB', err);});

app.use('/api/login', login);
app.use('/api/signup', signup);




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});