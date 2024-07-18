const express= require('express');
const router= express.Router();
const controllers=require("../controllers/hospital-controller")
// const upload=require("../middlewares/upload")
router.get('/',controllers.getHospitals)
router.post('/',controllers.postHospitals)

module.exports= router;