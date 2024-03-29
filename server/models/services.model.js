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
      type: String,
      required: true,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
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
  category: {
    type: String,
    required: true,
  },
  bookings: {
    type: [[Number]],
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Service = mongoose.model("Services", serviceSchema);

module.exports = Service;
