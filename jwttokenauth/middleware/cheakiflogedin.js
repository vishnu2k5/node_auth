const { verifyToken } = require("../services/service");

const checkIfLoggedIn = (req, res, next) => {
   const token = req.cookies.token;
    if (!token) {
        return res.status(401).redirect('/login');
    }
    const verified = verifyToken(token);
    if (!verified) {
        return res.status(401).redirect('/login');
    }
    req.user = verified;
    next();
};
module.exports = checkIfLoggedIn;
