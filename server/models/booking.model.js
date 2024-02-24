const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tourist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tourists",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Services",
    required: true,
  },
  bookedSlot: {
    type: [Number],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Booking = mongoose.model("Bookings", bookingSchema);
module.exports = Booking;
