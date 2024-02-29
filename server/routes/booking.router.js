const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.model");
const User = require("../models/users.model");

// -- -- MIDDLEWARE FUNCTIONS -- --
async function getBooking(req, res, next) {
  let booking;
  try {
    booking = await Booking.findById(req.params.id).populate("tourist service");
    if (booking == null) {
      return res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.booking = booking;
  next();
}

// -- -- READ ALL -- --
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find(); //.populate("tourist service").exec();
    res.json(bookings);
  } catch (err) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- READ ONE -- --
router.get("/:id", getBooking, (req, res) => {
  res.json(res.booking);
});

// -- -- CREATE -- --
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { service, bookedSlot, date, user } = req.body;
    const newBooking = new Booking({
      user,
      service,
      bookedSlot,
      date,
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// -- -- UPDATE -- --
router.patch("/:id", getBooking, async (req, res) => {
  if (req.body.tourist != null) {
    res.booking.tourist = req.body.tourist;
  }
  if (req.body.service != null) {
    res.booking.service = req.body.service;
  }
  if (req.body.bookedSlot != null) {
    res.booking.bookedSlot = req.body.bookedSlot;
  }
  if (req.body.date != null) {
    res.booking.date = req.body.date;
  }
  try {
    const updatedBooking = await res.booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// -- -- DELETE -- --
router.delete("/:id", getBooking, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// -- -- GET ALL BOOKINGS OF A TOURIST -- --
router.get("/tourist/:uuid", async (req, res) => {
  try {
    const touristData = Tourist.find({ _id: req.params.uuid });
    const touristId = touristData._id;
    const bookings = await Booking.find({ tourist: touristId })
      .populate("tourist service")
      .exec();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/freelancer/:uuid", async (req, res) => {
  try {
    const bookings = await Booking.find({ freelancerUUID: req.params.uuid })
      .populate("tourist service")
      .exec();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// -- -- GET ALL BOOKINGS OF A SERVICE -- --
router.get("/service/:id", async (req, res) => {
  try {
    console.log("/service/:id");
    const bookings = await Booking.find({ service: req.params.id }); //.populate("tourist service").exec();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -- -- GET ALL BOOKINGS OF A Date -- --

router.get("/date/:date", async (req, res) => {
  try {
    console.log("/service/:date");
    console.log(req.params.date);
    const bookings = await Booking.find({ date: req.params.date }); //.populate("tourist service").exec();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
