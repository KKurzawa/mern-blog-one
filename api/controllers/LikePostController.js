const Post = require('../models/Post.js')

const LikePost = async (req, res) => {
    const { id } = req.params;
    const like = req.body
    const postDoc = await Post.findById(id)
    postDoc.updateOne(like)
        .then(res.json(postDoc))
        .catch(err => res.json(err))
}

module.exports = LikePost