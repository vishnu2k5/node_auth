const users = require('../models/users');
const{ generateToken } = require('../services/service');




const handleUserSignup = (req, res) => {
    const { username, email, password } = req.body;
    // Handle user signup logic here
    const user = new users({username,email,password});
    user.save().then(() => {
        res.status(201).redirect('/login');
    }).catch((error) => {
        console.error(error);
        console.log(error.message);
        res.status(500).redirect('/signup');
    });
}

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).redirect('/login');
        }

        const user = await users.findOne({ email });
        if (!user) {
            return res.status(401).redirect('/login');
        }

        const match = password === user.password;
        if (!match) {
            return res.status(401).redirect('/login');
        }

        const token = generateToken(user);
        console.log(token);
        console.log(user);
        res.cookie('token', token);

        return res.status(200).redirect('/homeafterlogin');
    } catch (error) {
        console.error(error);
        return res.status(500).redirect('/login');
    }
};


module.exports = { handleUserSignup, handleUserLogin }; 