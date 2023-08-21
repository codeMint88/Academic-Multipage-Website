const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

router.route("/:id").get(postController.getPost);

module.exports = router;
