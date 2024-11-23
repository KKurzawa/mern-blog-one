const Post = require('../models/Post.js')

const GetPost = async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
}

module.exports = GetPost