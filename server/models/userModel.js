const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  role: { type: Number, default: 1 },
  form: { type: Object },
  submitted: { type: Boolean, default: false },
  status: { type: String },
  slot: { type: Schema.Types.ObjectId, ref: "Slot" },
  isBooked: { type: Boolean, default: false },
});

const model = mongoose.model("UserData", User);
module.exports = model;
