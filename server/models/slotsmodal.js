const mongoose = require("mongoose");
const { Schema } = mongoose;

const Slot = new Schema({
  section: {
    type: String,
  },
  slot: {
    type: Number,
  },
  userId: {
    type: String,
  },
  isBooked: { type: Boolean, default: false },
});

const model = mongoose.model("Slot", Slot);
module.exports = model;
