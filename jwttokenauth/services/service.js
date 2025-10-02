// ...existing code...
const jwt = require('jsonwebtoken');
const secret = 'vishnu';

/**
 * Generate a JWT.
 * user can be an object with {_id} or {id}, or a raw id string.
 * expiresIn defaults to '1h' but can be overridden.
 */
const generateToken = (user) => {
    console.log(user);
    const payload = { id: user._id, email: user.email };
    return jwt.sign(payload, secret);
};

const verifyToken = (token) => {
   if (!token) {
       return null;
   }
   try {
    return jwt.verify(token, secret);
   } catch (error) {
    return null;
    
   }
   
};

module.exports = { generateToken, verifyToken };
