const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(plainPassword) {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
}

async function comparePasswords(plainPassword, hashedPassword) {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
}

module.exports = {
    hashPassword,
    comparePasswords
};
