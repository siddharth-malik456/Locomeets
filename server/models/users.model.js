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
  bio: {
    type: String,
    required: true,
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
  languagesKnown: [
    {
      type: String,
      default: "English",
    },
  ],
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
