const express = require("express");
const Review = require("../models/review.model");
const Service = require("../models/services.model");
const Tourist = require("../models/tourist.model");
const users = require("../models/users.model");
const router = express.Router();

// -- -- READ ONE -- --
router.get("/getuser/:id", async (req, res) => {
  try {
    console.log("--- getuserReview --- ");
    const { id } = req.params;
    const user = await users.findOne({ UUID: id });
    console.log("user found ");
    console.log(user);
    const data = await Review.find({ user: user._id }).populate("user").exec();
    console.log(data);
    if (data) {
      res.send(data);
    } else {
      res.send([]);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.get("/getOne/:id", async (req, res) => {
  try {
    const id = req.params;
    const data = await Review.findById(id);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// -- -- READ ALL -- --
router.get("/:serviceId", async (req, res) => {
  const { serviceId } = req.params;
  try {
    console.log(serviceId);
    const data = await Review.find({ service: serviceId })
      .populate("user")
      //   .populate("services")
      .exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/", async (req, res) => {
  const serviceId = req.params;
  try {
    const data = await Review.find().exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- CREATE -- --
router.post("/", async (req, res) => {
  try {
    const response = await Review.create(req.body);

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
    console.log("delete commad for  review");
    const { id } = req.params;
    const response = await Review.findByIdAndDelete(id);
    // await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
