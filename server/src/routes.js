const authenticationController = require('./controllers/authenticationController')
const PostController = require('./controllers/PostController')
const userController = require('./controllers/UserController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
// const getAllPostController = require('./controllers/getAllPostController')
module.exports = (app) => {
  app.post('/register', authenticationControllerPolicy.register, authenticationController.register)
  app.post('/login', authenticationController.login)
  app.post('/index', PostController.post)
  app.get('/index', PostController.index)
  app.get('/index/:postId', PostController.show)
  app.get('/userIndex', userController.index)
  app.get('/userIndex/:userId', userController.show)
}
