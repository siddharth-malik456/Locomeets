const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
  UUID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});

const Tourist = mongoose.model("Tourists", touristSchema);

module.exports = Tourist;
