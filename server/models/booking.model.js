const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Services",
    required: true,
  },
  bookedSlot: [
    [
      {
        type: Number,
        required: true,
      },
    ],
  ],
  date: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Bookings", bookingSchema);
module.exports = Booking;
