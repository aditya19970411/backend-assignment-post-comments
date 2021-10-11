const db = require("../../db");
const Post = db.Post;
const Comment = db.Comment;
const joi = require("joi");

async function getComments(req, res) {
  try {
    const { post_id, comment_id } = req.params;
    var comments;
    if (post_id) {
      comments = await Comment.findAll({
        where: { post_id },
        include: [
          {
            model: Comment,
            as: "childComments",
            attributes: ["id", "text", "createdAt"],
          },
        ],
      });
    }
    if (comment_id) {
      comments = await Comment.findAll({
        where: { comment_id },
        include: [
          {
            model: Comment,
            as: "childComments",
            attributes: ["id", "text", "createdAt"],
          },
        ],
      });
    }
    res.json({ comments });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: { message: "internal error occured" } });
  }
}

async function createComment(req, res) {
  try {
    var reg;
    if (!req.body.comment_id) {
      reg = joi.object({
        text: joi.string().max(200, "utf-8").required(),
        post_id: joi.number().integer().required(),
      });
    } else {
      reg = joi.object({
        text: joi.string().max(200, "utf-8").required(),
        comment_id: joi.number().integer().required(),
      });
    }
    const { error } = reg.validate(req.body);
    if (error) res.status(422).send({ Message: error.details[0].message });
    const { text, post_id, comment_id } = req.body;
    const comment = await Comment.create({
      text,
      post_id,
      comment_id,
    });
    res.json({ Comment: comment });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: { message: "internal error occured" } });
  }
}

module.exports = { createComment, getComments };
