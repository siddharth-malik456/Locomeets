const express = require("express");
const router = express.Router();
const Tourist = require("../models/tourist.model");
const middleware = require("../middleware/middleware");

// -- -- READ ALL -- --
router.get("/", async (req, res) => {
  try {
    const data = await Tourist.find({}).exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// -- -- READ ONE with id -- --
router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tourist.findOne({ _id: id });
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
    console.log("hello world");
    const UUID = req.user.uid;
    const email = req.user.email;
    const { name, nationality, phoneNumber, profilePicture } = req.body;
    console.log(name);
    const response = await Tourist.create({
      UUID,
      name,
      email,
      nationality,
      phoneNumber,
      profilePicture,
    });
    await response.save();
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
    const { name, email, nationality, phoneNumber, profilePicture } = req.body;
    const id = req.params;
    const response = await Tourist.findByIdAndUpdate(
      id,
      {
        name,
        email,
        nationality,
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
    const response = await Tourist.findByIdAndDelete(id);
    await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
