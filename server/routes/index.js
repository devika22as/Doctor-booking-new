const express= require('express');
const departmentRoutes= require('./department-routes')
const hospitalRoutes= require('./hospital-routes')

const router= express.Router();

router.use('/department',departmentRoutes)
router.use('/hospital',hospitalRoutes)

module.exports= router;