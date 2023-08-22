const express = require("express");
const router = express.Router();
const path = require("path");

const Course = require("../model/data");

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

router.get("/about(.html)?", (req, res) => {
  res.render("about");
});

module.exports = router;
