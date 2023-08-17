const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?|/home(.html)?", (req, res) => {
  res.render("home");
});

router.get("/courses(.html)?", (req, res) => {
  res.render("courses");
});

router.get("/contact(.html)?", (req, res) => {
  res.render("contact");
});

router.get("/about(.html)?", (req, res) => {
  res.render("about");
});

module.exports = router;
