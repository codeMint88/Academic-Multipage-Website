const mongoose = require("mongoose");

// Create courseSchema object and model
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

// Create a text index on the field (description) you want to perform full-text search on, when the user sends a post request using the search bar
courseSchema.index({ description: "text" });

const Course = mongoose.model("Course", courseSchema);

// Create messageSchema object and model
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry; no name was entered."],
  },
  email: {
    type: String,
    required: [true, "Please check your data entry; no email was entered."],
  },
  message: {
    type: String,
    required: [true, "Please check your data entry; no message was entered."],
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Course, Message };
