const { verifyToken } = require("../services/service");

const checkIfLoggedIn = (req, res, next) => {
   try {
    const token = req.cookies && req.cookies.token;
    if (!token) return next();

    const payload = verifyToken(token);
    if (payload) return res.redirect('/homeafterlogin');

    return next();
  } catch (err) {
    return next();
  }
};
module.exports = checkIfLoggedIn;
