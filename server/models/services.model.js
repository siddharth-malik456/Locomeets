const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: [String],
      required: true,
    },
  ],
  //   reviews: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Reviews",
  //     },
  //   ],
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
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
  bookings: {
    type: [[Number]],
    required: true,
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancers",
  },
});

const Service = mongoose.model("Services", serviceSchema);

module.exports = Service;
