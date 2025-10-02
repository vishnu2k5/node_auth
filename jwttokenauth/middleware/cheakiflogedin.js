const { verifyToken } = require("../services/service");
const users = require("../models/users");

const checkIfLoggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect('/login');

    const { id, email } = verifyToken(token);
    const user = users.findOne({ _id: id, email });
    if (!user) return res.redirect('/login');

    res.user = user;
    return next();
};

module.exports = checkIfLoggedIn;
