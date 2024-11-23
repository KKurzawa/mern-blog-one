const Post = require('../models/Post.js')

const DeletePost = (req, res) => {
    const { id } = req.params
    Post.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}


module.exports = DeletePost