require('dotenv').config()
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

const GetProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, secret, {}, (err, info) => {
            if (err) throw err;
            res.json(info);
        });
    }
}

module.exports = GetProfile