module.exports = (sequelize, DataTypes) => sequelize.define('SavedPost', {
  UserId: DataTypes.STRING,
  PostId: DataTypes.STRING
})
