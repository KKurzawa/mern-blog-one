const User = require('../models/User.js')
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const RegisterUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}

module.exports = RegisterUser