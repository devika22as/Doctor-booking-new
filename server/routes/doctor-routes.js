const express = require('express');
const router = express.Router();
const controllers = require('../controllers/doctor-controller');
const upload = require('../middlewares/upload');
router.post('/signup', upload.single('image'), controllers.signupDoctor);

module.exports = router;
