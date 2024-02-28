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
const userRouter = require("./routes/users.router");
const reviewRouter = require("./routes/review.router");

// -- -- MIDDLEWARE IMPORTS -- --
const Middleware = require("./middleware/middleware");

// -- -- MONGO CONNECTION -- --
main().catch((err) => console.log(err));
async function main() {
  //yzbcUvOCzwNTj4QU
  await mongoose.connect(
    "mongodb+srv://root:root@badam6969.qrmbbm8.mongodb.net/?retryWrites=true&w=majority&appName=Badam6969"
  );
  console.log("Connection open");
}

// -- -- MIDDLEWARE -- --
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(Middleware.decodeToken);

// -- -- ROUTES -- --
app.use("/services", serviceRoutes);
app.use("/booking", bookingRoutes);
app.use("/users", userRouter);
app.use("/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(PORT, (error) => {
  console.log(`Listening on port ${PORT}...`);
});
