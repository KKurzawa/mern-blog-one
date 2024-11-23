const express = require('express');
const router = express.Router();

import RegisterUser from '../controllers/RegisterController.js';

router.post('/', RegisterUser)

module.exports = router