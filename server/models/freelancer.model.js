const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
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
    required: true,
  },
});

const Freelancer = mongoose.model("Freelancers", freelancerSchema);

module.exports = Freelancer;
