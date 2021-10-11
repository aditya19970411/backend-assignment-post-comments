const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
    }
  }

  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );

  Post.associate = function (models) {
    Post.hasMany(models.Comment, {
      foreignKey: "post_id",
    });
  };

  return Post;
};
