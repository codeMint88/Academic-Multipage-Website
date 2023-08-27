const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require("dotenv").config();
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3000;

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
// I disconneted cors because it is not necessary for now. Our frontend and backend are served by express. I will activate the cors middleware if there is a frontend app that needs to make cross-origin requests to this server.

// app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data

app.use(bodyParser.urlencoded({ extended: true }));

// built-in middleware for json

app.use(express.json());

// Serve static files from the public directory for root and /posts routes
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/posts", express.static(path.join(__dirname, "public")));

// Serve static files from the uploads directory for all routes
app.use("/", express.static(path.join(__dirname, "uploads")));

// routes

app.use("/", require("./routes/root"));
app.use("/posts", require("./routes/api/posts"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    const infoDisplay =
      "The page you requested for was not found, and we have a fine guess why. If you typed the URL directly, please make sure the spelling is correct. If you clicked on a link to get here, the link is outdated. What can you do? Have no fear, help is near!";
    const imageURL = "image/404_img_1351x1213-transformed.png";
    res.render("404", {
      infoDisplay,
      imageURL,
    });
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
