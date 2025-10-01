const User = require('../models/users');

const handelsignuprequest = async(req,res)=>{
    const {username,email,password} = req.body;

    // Basic validation to avoid Mongoose required field errors
    if(!username || !email || !password){
        return res.status(400).send('username, email and password are required');
    }

    const user = await User.create({
        username,
        email,
        password
    })

    res.redirect('/');
}


module.exports={
    handelsignuprequest
}