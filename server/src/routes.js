const authenticationController = require('./controllers/authenticationController')
const PostController = require('./controllers/PostController')
const userController = require('./controllers/UserController')
const bookmarksController = require('./controllers/bookmarksController')
// const favoriteController = require('./controllers/favoriteController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const commentController = require('./controllers/commentController')
module.exports = (app) => {
  app.post('/register', authenticationControllerPolicy.register, authenticationController.register)
  app.post('/login', authenticationController.login)
  app.post('/index', PostController.post)
  app.put('/index/:postId', PostController.put)
  app.get('/index', PostController.index)
  app.get('/index/:postId', PostController.show)
  app.get('/userIndex', userController.index)
  app.get('/userIndex/:userId', userController.show)
  // app.get('/userIndex/:userId', PostController.getPostByUserId)
  app.get('/bookmarks', bookmarksController.index)
  // app.get('/bookmarks', bookmarksController.indexShow)
  app.post('/bookmarks', bookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', bookmarksController.delete)

  // app.get('/favorites', favoriteController.index)
  // app.post('/favorites', favoriteController.post)
  // app.delete('/favorites/:favoriteId', favoriteController.delete)
  app.get('/comments', commentController.index)
  app.post('/comments', commentController.post)
  app.delete('/comments/:commentId', commentController.delete)
}
