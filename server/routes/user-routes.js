const express = require('express');
const controllers = require('../controllers/user-controller');
// const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/signup',  controllers.signupUsers);
router.post('/login', controllers.loginUsers);

module.exports = router;
