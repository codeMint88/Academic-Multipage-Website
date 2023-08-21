const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
require("dotenv").config();
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3500;

// Set up Database
const mongoose = require("mongoose");
const mongoDB_Port = process.env.MONGO_DB_URL;
mongoose.connect(mongoDB_Port);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose default connection done!");
});

db.on("error", (err) => {
  console.log("Mongoose default connection error:" + err);
});

// Set up view engine

app.set("view engine", "ejs");

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// built-in middleware for json
app.use(express.json());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", express.static(path.join(__dirname, "/uploads")));

// routes
app.use("/", require("./routes/root"));
app.use("/posts", require("./routes/api/posts"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.render("404");
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const mongoose = require("mongoose");
// const courseSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Please check your data entry; no title specified."],
//   },
//   description: {
//     type: String,
//     required: [true, "Please check your data entry; no description specified."],
//   },
//   image: {
//     data: Buffer,
//     contentType: String,
//   },
//   created: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
// });

// const courseModel = mongoose.model("Course", courseSchema);

// module.exports = courseModel;
