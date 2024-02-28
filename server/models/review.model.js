const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Services",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
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
  images: [{ type: String, required: true }],
  like: {
    type: Number,
    default: 0,
  },
  dateOfReview: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Reviews", reviewSchema);
module.exports = Review;
