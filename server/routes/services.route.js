const express = require("express");
const Service = require("../models/services.model");
const freelancerModel = require("../models/users.model");
const router = express.Router();

// -- -- READ ALL -- --

router.get("/", async (req, res) => {
  try {
    const data = await Service.find({})
      //.populate("Reviews")
      //  .populate("Freelancers")
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
    console.log("data");
    const data = await Service.find({ _id: req.params.id })
      //.populate("Reviews")
      //  .populate("Freelancers")
      .exec();

    console.log(data);

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// -- -- CREATE -- --
router.post("/", async (req, res) => {
  try {
    console.log("received -");
    console.log(req.body);
    let freeLancerId;
    // const reviewId = req.body.reviewId;
    const freelancerUUID = req.body.freelancerUUID;
    //   const freelancerData = await freelancerModel
    //     .findOne({ UUID: freelancerUUID })
    //     .exec();
    //   console.log(freelancerData);

    //   if (freelancerData) {
    //     freeLancerId = freelancerData._id;
    //   }
    const response = await Service.create({
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
      bookings: req.body.bookings,
      // freelancer: freeLancerId,
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
