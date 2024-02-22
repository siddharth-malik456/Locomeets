const express = require("express");
const Review = require("../models/review.model");
const Service = require("../models/services.model");
const Tourist = require("../models/tourist.model");
const router = express.Router();

// -- -- READ ALL -- --
router.get("/:serviceId", async (req, res) => {
  const serviceId = req.params;
  try {
    const data = await Review.find({ serviceId: serviceId }).exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- READ ONE -- --
router.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    const data = await Review.findById(id);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- CREATE -- --
router.post("/:serviceId/:userId", async (req, res) => {
  try {
    const { serviceId, userId } = req.params;
    const { rating, heading, description, images, like } = req.body;

    const response = await Review.create({
      service: serviceId,
      user: userId,
      rating,
      heading,
      description,
      images,
      like,
    });

    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- UPDATE -- --
router.put("/:id", async (req, res) => {
  try {
    const { rating, heading, description, images, like } = req.body;
    const id = req.params;
    const response = await Review.findByIdAndUpdate(
      id,
      {
        rating,
        heading,
        description,
        images,
        like,
      },
      { new: true }
    );
    await response.save();
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
    const response = await Review.findByIdAndDelete(id);
    await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
