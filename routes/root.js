const express = require("express");
const router = express.Router();
const _ = require("lodash");

// const path = require("path");

const { Course } = require("../model/data");
const { Message } = require("../model/data");

router.get("^/$", (req, res) => {
  res.redirect(301, "/home");
});

router.get("index(.html)?|/home(.html)?", (req, res) => {
  res.render("home");
});

router.get("/courses(.html)?", async (req, res) => {
  try {
    const foundCourses = await Course.find();
    res.render("courses", {
      coursesData: foundCourses,
    });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/contact(.html)?", (req, res) => {
  res.render("contact");
});

router.post("/contact(.html)?", async (req, res) => {
  try {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const message = await newMessage.save();
    res.render("message", { senderName: message.name });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/about(.html)?", (req, res) => {
  res.render("about");
});

router.get("/unavailable(.html)?", (req, res) => {
  const notAvailableInfo =
    "The page you requested for is not available at the moment, and we have a fine guess why. This is a progressive project, because of that, this page you are looking for is not available in this version. Hopefully, it will be available in the next update. Yoc can fill the contact us form if you need an update when this page is available. What can you do? Have no fear, help is near!";
  const notAvailableimageURL = "image/404_imagex617x612-transformed.png";
  res.render("404", {
    infoDisplay: notAvailableInfo,
    imageURL: notAvailableimageURL,
  });
});

router.post("/search", async (req, res) => {
  const searchQuery = _.lowerCase(req.body.searchQuery);
  console.log(searchQuery);

  try {
    // Search for data in the database
    const searchData = await Course.find({
      $text: { $search: searchQuery },
    });

    if (searchData.length === 0) {
      return res.redirect("/"); // Redirect to home route if no matching data
    }

    res.render("courses", {
      coursesData: searchData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
