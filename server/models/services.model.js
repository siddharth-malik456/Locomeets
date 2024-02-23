const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // longDescription: {
  //   type: String,
  //   required: true,
  // },
  images: [
    {
      type: [String],
      required: true,
    },
  ],
  workingDays: [
    {
      type: Number,
      required: true,
    },
  ],
  //   reviews: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Reviews",
  //     },
  //   ],
  location: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bookings: [[{ type: Number }]],
  freelancerUUID: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Services", serviceSchema);

module.exports = Service;
