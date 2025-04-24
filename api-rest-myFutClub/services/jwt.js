// DEPENDENCIES
const jsonwebtoken = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../fs/keys');


const createAccessToken = (userId) => {    
    try {
        let token = jsonwebtoken.sign({ userId }, PRIVATE_KEY, { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw new Error('Error 500: Unexpected internal server error.');
    }
}

const verifyAccessToken = (token) => {
    try {
        let decoded = jsonwebtoken.verify(token, PRIVATE_KEY);
        return {status: "success", userId: decoded.userId};
    } catch (error) {
        return {status: "error"};
    }
}

module.exports = {
    createAccessToken,
    verifyAccessToken,
    PRIVATE_KEY
}