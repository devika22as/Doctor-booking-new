const mongoose = require('mongoose');

const slotsSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    timeFrom: {
      type: String,
      trim: true,
    },
    timeTo: {
      type: String,
      required: true,
    },
    availableSlots: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Slots = mongoose.model('Slots', slotsSchema);
module.exports = Slots;
