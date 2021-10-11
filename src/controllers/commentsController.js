const express = require("express");
const { createComment, getComments } = require("../services/commentsServices");
const router = express.Router();

router.get("/getCommentToPost/:post_id", getComments);
router.get("/getCommentToComment/:comment_id", getComments);
router.post("/create", createComment);

module.exports = router;
