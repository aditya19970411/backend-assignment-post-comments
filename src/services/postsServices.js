const db = require("../../db");
const Post = db.Post;
const Comment = db.Comment;
const { Op } = require("sequelize");
const joi = require("joi");

async function getAllPost(req, res) {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "createdAt"],
        },
      ],
    });
    return res.status(200).json({ Posts: posts });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}

async function addPosts(req, res) {
  try {
    const reg = joi.object({
      title: joi.string().required(),
      description: joi.string().max(1000, "utf-8").required(),
    });
    const { error } = reg.validate(req.body);
    if (error)
      return res.status(422).send({ Message: error.details[0].message });
    const { title, description } = req.body;
    const post = await Post.create({ title, description });
    res.json({ Post: post });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ Error: { message: "internal error occured" } });
  }
}

module.exports = { getAllPost, addPosts };
