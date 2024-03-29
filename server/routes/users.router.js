const express = require("express");
const users = require("../models/users.model");
const router = express.Router();
const middleware = require("../middleware/middleware");

// -- -- READ ALL -- --
router.get("/", async (req, res) => {
  try {
    const data = await users.find({}).exec();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- READ ONE -- --
router.get("/uid/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;
    const data = await users.findOne({ UUID: uid });
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await users.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// -- -- CREATE -- --
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const {
      UUID,
      firstName,
      lastName,
      email,
      nationality,
      phoneNumber,
      isTourist,
      bio,
    } = req.body;
    const response = await users.create({
      UUID,
      firstName,
      lastName,
      email,
      phoneNumber,
      nationality,
      isTourist,
      bio,
    });
    //services and profilePic empty
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
    const response = await users.findByIdAndUpdate(
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
    console.log("delete command");
    const { id } = req.params;
    const response = await users.findByIdAndDelete(id);
    await response.save();
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
