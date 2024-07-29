const express = require('express');
const controllers = require('../controllers/doctor-controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/signup', upload.single('image'), controllers.signupDoctor);
router.post('/login', controllers.loginDoctor);

module.exports = router;
