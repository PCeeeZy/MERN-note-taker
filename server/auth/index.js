const jwt = require('jsonwebtoken');

const createToken = async (user_id) => {
    const token = await jwt.sign({
        user_id,
    }, process.env.JWT_SECRET, {expiresIn: '4h'});

    return token;
}

const validateToken = async (token) => {
    const isValid = await jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: '4h'
    });

    return isValid;
}

module.exports = {createToken, validateToken}