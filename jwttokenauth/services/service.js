// ...existing code...
const jwt = require('jsonwebtoken');

/**
 * Generate a JWT.
 * user can be an object with {_id} or {id}, or a raw id string.
 * expiresIn defaults to '1h' but can be overridden.
 */
const generateToken = (user, expiresIn = '1h') => {
    console.log(user);
    const id = (user && (user._id || user.id)) || user;
    const email = user && user.email ? user.email : undefined;
    const payload = { id, ...(email ? { email } : {}) };
    const secret = process.env.JWT_SECRET || 'vishnu';
    return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (token) => {
    try {
        const secret = process.env.JWT_SECRET || 'vishnu';
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
// ...existing code...