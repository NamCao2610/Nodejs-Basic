const jwt = require('jsonwebtoken');
const KEY = 'i2u1e812udjsacnfqsds2qy2';

function createToken(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, KEY, { expiresIn: '2 days' }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, KEY, (err, obj) => {
            if (err) return reject(err);
            resolve(obj);
        });
    });
}

module.exports = { createToken, verifyToken };   