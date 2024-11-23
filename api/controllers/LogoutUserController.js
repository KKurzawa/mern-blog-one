const LogoutUser = (req, res) => {
    res.cookie('token', '').json('ok');
}

module.exports = LogoutUser