const express = require("express");
const Freelancer = require("../models/freelancer.model");
const router = express.Router();
const middleware = require("../middleware/middleware");

// -- -- READ ALL -- --
router.get("/", async (req, res) => {
  try {
    const data = await Freelancer.find({}).exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- READ ONE -- --
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tourist.findOne({ UUID: id });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- CREATE -- --
router.post("/", middleware.decodeToken, async (req, res) => {
  try {
    const UUID = req.user.uid;
    const email = req.user.email;
    const { name, nationality, phoneNumber, profilePicture } = req.body;
    const response = await Freelancer.create({
      UUID,
      name,
      email,
      phoneNumber,
      profilePicture,
    });
    await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- UPDATE -- --
router.put("/:id", async (req, res) => {
  try {
    const { name, email, nationality, phoneNumber, profilePicture } = req.body;
    const id = req.params;
    const response = await Freelancer.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phoneNumber,
        profilePicture,
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
    const response = await Freelancer.findByIdAndDelete(id);
    await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
