const Slots = require('../db/models/slots-schema');
const postSlots = async (req, res) => {
  try {
    const { date, timeFrom, timeTo, availableSlots, doctor } = req.body;

    if (!doctor) {
      return res.status(400).json({ message: 'Doctor ID is required' });
    }

    const slots = await Slots.findOneAndUpdate(
      { date: new Date(date), doctor: doctor },
      { $push: { slots: { timeFrom, timeTo, availableSlots } } },
      { new: true, upsert: true }
    );

    res
      .status(201)
      .json({ message: 'Slots added or updated successfully', data: slots });
  } catch (e) {
    res.status(400).json({ message: 'Failed to add or update slots', e });
  }
};

const getSlots = async (req, res) => {
  try {
    const { doctor } = req.query;

    if (!doctor) {
      return res.status(400).json({ message: 'Doctor ID is required' });
    }

    const slots = await Slots.find({ doctor: doctor }).populate('doctor'); 

    if (!slots.length) {
      return res
        .status(404)
        .json({ message: 'No slots found for this doctor' });
    }

    res.status(200).json({ message: 'Success', data: slots });
  } catch (error) {
    
    res.status(500).json({ message: 'Failed to fetch slots', error });
  }
};
const getSlotsById = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const slots = await Slots.find({ doctor: doctorId });

    if (!slots.length) {
      return res
        .status(404)
        .json({ message: 'No slots found for this doctor.' });
    }

    res.status(200).json({ message: 'Success', data: slots });
  } catch (error) {
    console.error('Error fetching slots:', error);
    res.status(500).json({ message: 'Failed to fetch slots', error });
  }
};

module.exports = { getSlots, postSlots, getSlotsById };
