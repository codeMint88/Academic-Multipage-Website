const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost);

router
  .route("/:courseTitle")
  .get(postController.getPost)
  .put(postController.putNewPost)
  .patch(postController.patchPost)
  .delete(postController.deletePost);

module.exports = router;
