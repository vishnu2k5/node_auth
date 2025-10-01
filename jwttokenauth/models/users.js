const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const Schama = Mongoose.Schema;

const userauthSchema = new Schama({
    username: {
        type: String,       
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,

    }

},{timestamps:true})

const userAuth = mongoose.model('userAuth',userauthSchema);

module.exports = userAuth;