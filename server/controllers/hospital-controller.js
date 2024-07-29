const Hospitals = require('../db/models/hospital-schema');

// const getHospitals = async (req, res) => {
//   const hospitals = await Hospitals.find();
//   res.status(200).json({ message: 'success', data: hospitals });
// };

const getHospitals = async (req, res) => {
 
    const { departmentId } = req.query;
    let hospitals;

    if (departmentId) {
      hospitals = await Hospitals.find({ departments: departmentId });
    } else {
      hospitals = await Hospitals.find();
    }

    res.status(200).json({ message: 'success', data: hospitals });
  
};

// const getHospitalsByDepartmentId = async (req, res) => {
//   const { departmentId } = req.params;

//   if (!departmentId) {
//     return res.status(400).json({ message: 'error', error: 'Department ID is required' });
//   }
//   const hospitals = await Hospitals.find({ departments: departmentId });
//   res.status(200).json({ message: 'success', data: hospitals });
// };
const postHospitals = async (req, res) => {
  const body = req.body;
  const { originalname } = req.file;
  console.log(req.file);
  body.image = `http://localhost:${process.env.PORT}/uploads/${originalname}`;

  const hospitals = await Hospitals.create(body);

  res.status(201).json({ message: 'success', data: hospitals });
};

module.exports = { getHospitals, postHospitals };
