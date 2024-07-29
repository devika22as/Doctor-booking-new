const Slots = require('../db/models/slots-schema');

const postSlots = async (req, res) => {
  const body = req.body;
  console.log(body);
  const slots = await Slots.create(body);

  res.status(201).json({ message: 'success', data: slots });
};

module.exports = { postSlots };
