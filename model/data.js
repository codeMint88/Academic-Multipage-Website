const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please check your data entry; no title specified."],
  },
  description: {
    type: String,
    required: [true, "Please check your data entry; no description specified."],
  },
  image: {
    type: String,
    required: [true, "Please check your data entry; no image was uploaded."],
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;
