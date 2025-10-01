const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const staticRoutes = require('./routes/static');
const authRoutes = require('./routes/user.js');
const cheakiflogedin = require('./middleware/cheakiflogedin');


const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/new').then(()=>{console.log('connected to db')}).catch((err)=>console.log(err));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(staticRoutes);
app.use('/login', cheakiflogedin, authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});