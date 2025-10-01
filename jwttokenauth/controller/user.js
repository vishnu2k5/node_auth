const users = require('../models/user');




const handleUserSignup = (req, res) => {
    const { username, email, password } = req.body;
    // Handle user signup logic here
    const user = new users({username,email,password});
    user.save().then(() => {
        res.status(201).send('User registered successfully');
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Internal server error');
    });
}

const handleUserLogin = (req, res) => {
    const { email, password } = req.body;
    // Handle user login logic here
    users.findOne({email}).then((user) => {
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        if (user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }
        res.status(200).send('User logged in successfully');
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Internal server error');
    });
}


module.exports = { handleUserSignup, handleUserLogin }; 