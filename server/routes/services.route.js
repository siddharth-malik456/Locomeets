const express = require("express");
const Service = require("../models/services.model");
const User = require("../models/users.model");
const router = express.Router();

// -- -- READ ALL -- --

router.get("/", async (req, res) => {
  try {
    const data = await Service.find({}).populate("author").exec();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/filter/:category", async (req, res) => {
  try {
    console.log(req.query);
    const state = req.query.state;
    let data;
    if (state) {
      console.log("34567890");
      data = await Service.find({
        category: req.params.category,
        state: state,
      })
        .populate("author")
        .exec();
    } else {
      data = await Service.find({
        category: req.params.category,
      })
        .populate("author")
        .exec();
    }
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/state/:state", async (req, res) => {
  try {
    const data = await Service.find({ state: req.params.state })
      .populate("author")
      .exec();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await Service.find({ _id: req.params.id })
      .populate("author")
      .exec();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// -- -- CREATE -- --
router.post("/:userId", async (req, res) => {
  try {
    const response = await Service.create({
      heading: req.body.heading,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price,
      city: req.body.city,
      state: req.body.state,
      author: req.params.userId,
      category: req.body.category,
      bookings: req.body.booking,
    });
    response.save();
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- UPDATE -- --
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Service.findOneAndUpdate(id, {
      name: req.body.name,
      heading: req.body.heading,
      description: req.body.description,
      images: req.body.images,
      workingDays: req.body.workingDays,

      location: { latitude: req.body.latitude, longitude: req.body.longitude },
      price: req.body.price,
      city: req.body.city,
      state: req.body.state,
      category: req.body.category,
      // freelancer: freeLancerId,
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- DELETE -- --
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Service.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
