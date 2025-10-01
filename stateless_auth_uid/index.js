const express = require('express');
const mongoose = require('mongoose');
const infoRoutes = require('./routes/info.js');
const authroute = require('./routes/auth.js');
const { render } = require('ejs');
const User = require('./models/users');

const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/new')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
}); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/info/add', infoRoutes);
app.use('/', infoRoutes);
app.get('/signup', authroute )
app.post('/signup', authroute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

