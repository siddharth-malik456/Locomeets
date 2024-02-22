// -- -- NPM IMPORTS -- --
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

// -- -- GLOBAL VAIRABLES -- --
const PORT = 3000;
const app = express();

// -- -- ROUTING IMPORTS -- --
const serviceRoutes = require("./routes/services.route");
const bookingRoutes = require("./routes/booking.router");
const touristRouter = require("./routes/tourist.router");
const freelancerRouter = require("./routes/freelancer.router");
const reviewRouter = require("./routes/review.router");

// -- -- MIDDLEWARE IMPORTS -- --
const Middleware = require("./middleware/middleware");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(Middleware.decodeToken);

// -- -- ROUTES -- --
app.use("/services", serviceRoutes);
app.use("/booking", bookingRoutes);
app.use("/tourist", touristRouter);
app.use("/freelancer", freelancerRouter);
app.use("/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(PORT, (error) => {
  console.log(`Listening on port ${PORT}...`);
});
