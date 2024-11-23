// dependencies
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const app = express();
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

// models
// const User = require('./models/User');
const Post = require('./models/Post');

const { PORT, mongoDBURL } = require('./config/connection.js')

// controller imports 
const RegisterUser = require('./controllers/RegisterController.js')
const LoginUser = require('./controllers/LoginController.js')
const GetProfile = require('./controllers/ProfileController.js');
const LogoutUser = require('./controllers/LogoutUserController.js');
const CreatePost = require('./controllers/CreatePostController.js');
const UpdatePost = require('./controllers/UpdatePost.js');
const LikePost = require('./controllers/LikePostController.js')
const GetPosts = require('./controllers/GetPostsController.js')
const GetPost = require('./controllers/GetPostController.js')
const DeletePost = require('./controllers/DeletePostController.js')

// const salt = bcrypt.genSaltSync(10);
// const secret = process.env.SECRET

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// crud 
app.post('/register', RegisterUser)
app.post('/login', LoginUser)
app.get('/profile', GetProfile)
app.post('./logout', LogoutUser)
app.post('/post', uploadMiddleware.single('file'), CreatePost)
app.put('/post', uploadMiddleware.single('file'), UpdatePost)
app.put('/post/like/:id', LikePost)
app.get('/post', GetPosts)
app.get('/post/:id', GetPost)
app.delete('/post:id', DeletePost)

// app.delete('/post/:id', (req, res) => {
//     const { id } = req.params
//     Post.findByIdAndDelete(id)
//         .then(result => res.json(result))
//         .catch(err => res.json(err))
// })

// database connection 
mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT);
    console.log(`App running on Port:${PORT}`)
})

