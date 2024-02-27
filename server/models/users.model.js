const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UUID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  services: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Services",
  },
  nationality: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  isTourist: {
    type: Boolean,
    required: true,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
