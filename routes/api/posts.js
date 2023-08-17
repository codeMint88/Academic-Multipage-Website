const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/postController");

router
  .route("/")
  .get(employeesController.getAllPosts)
  .post(employeesController.createNewPost)
  .put(employeesController.updatePost)
  .delete(employeesController.deletePost);

router.route("/:id").get(employeesController.getPost);

module.exports = router;
