// module.exports = (sequelize, DataTypes) => {
//   const Bookmark = sequelize.define('Bookmark', {})
//   return Bookmark
// }

module.exports = (sequelize, DataTypes) => sequelize.define('Bookmark', {
  UserId: DataTypes.STRING,
  PostId: DataTypes.STRING
})
