// -- -- NPM IMPORTS -- --
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

// -- -- GLOBAL VAIRABLES -- --
const PORT = 3000;
const app = express();

// -- -- MODEL IMPORTS -- --
const Freelancer = require("./models/freelancer.model");
const Tourist = require("./models/tourist.model");

// -- -- ROUTING IMPORTS -- --
const serviceRoutes = require("./routes/services.route");
const bookingRoutes = require("./routes/booking.router");
const touristRouter = require("./routes/tourist.router");
const freelancerRouter = require("./routes/freelancer.router");
const reviewRouter = require("./routes/review.router");

// -- -- MIDDLEWARE IMPORTS -- --
const Middleware = require("./middleware/middleware");
const middleware = require("./middleware/middleware");

// -- -- MONGO CONNECTION -- --
main().catch((err) => console.log(err));
async function main() {
  //yzbcUvOCzwNTj4QU
  await mongoose.connect(
    "mongodb+srv://nayanansh:yzbcUvOCzwNTj4QU@cluster0.xhzfkux.mongodb.net/"
  );
  console.log("Connection open");
}

// -- -- MIDDLEWARE -- --
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Middleware.decodeToken);

// -- -- ROUTES -- --
app.use("/services", serviceRoutes);
app.use("/booking", bookingRoutes);
app.use("/tourist", touristRouter);
app.use("/freelancer", freelancerRouter);
app.use("/review", reviewRouter);

// -- -- COMMON ROUTES -- --
app.get("/checkUser", middleware.decodeToken, async (req, res) => {
  try {
    const UUID = req.user.UUID;
    const isUserTourist = await Tourist.find({ UUID: UUID });
    const isUserFreelancer = await Freelancer.find({ UUID: UUID });
    if (isUserTourist.length > 0) {
      res.send({ user: "tourist" });
    } else if (isUserFreelancer.length > 0) {
      res.send({ user: "freelancer" });
    } else {
      res.send({ user: "doesNotExist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(PORT, (error) => {
  console.log(`Listening on port ${PORT}...`);
});
