const Mongoose = require('mongoose');
const Schma = Mongoose.Schema;

const userSchema = new Schma({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },  
    password:{
        type: String,
        required: true,

    }
},{ timestamps: true });

const User = Mongoose.model('User', userSchema);
module.exports = User;