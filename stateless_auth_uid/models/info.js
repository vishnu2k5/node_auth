const mongoose = require('mongoose');
const Schema = mongoose.Schema;     

const infoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Info = mongoose.model('Info', infoSchema);
module.exports = Info;
