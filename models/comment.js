const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
    }
  }

  Comment.init(
    {
      text: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
      comment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );

  Comment.associate = function (models) {
    Comment.belongsTo(models.Post, {
      foreignKey: "post_id",
    });
    Comment.hasMany(models.Comment, {
      foreignKey: {
        name: "comment_id",
      },
      as: "childComments",
    });
  };

  return Comment;
};
