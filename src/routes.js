const express = require("express");
const router = express.Router();
const postController = require("./controllers/postsController");
const commentContoller = require("./controllers/commentsController");

router.use("/posts", postController);
router.use("/comments", commentContoller);

module.exports = router;
