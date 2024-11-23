const Post = require('../models/Post.js')

const GetPosts = async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)
    );
}

module.exports = GetPosts