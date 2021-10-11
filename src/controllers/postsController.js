const express = require("express");
const { getAllPost, addPosts } = require("../services/postsServices");
const router = express.Router();

router.get("/", getAllPost);
router.post("/create", addPosts);

module.exports = router;
