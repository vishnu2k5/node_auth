const logincheck = (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).redirect('/login');
    }
};
module.exports = logincheck;