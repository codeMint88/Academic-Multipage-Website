const express = require("express");
const router = express.Router();
// const path = require("path");

const { Course } = require("../model/data");
const { Message } = require("../model/data");

router.get("^/$|/index(.html)?|/home(.html)?", (req, res) => {
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

module.exports = router;
