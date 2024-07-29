const express = require('express');
const controllers = require('../controllers/slots-controller');
// const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', controllers.postSlots);

module.exports = router;
