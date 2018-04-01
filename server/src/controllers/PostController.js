const {Post} = require('../models')
module.exports = {
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post.toJSON())
    } catch (err) {
      console.log('hey errors', err)
      res.status(400).send({
        error: 'Error has occured trying to create new post'
      })
    }
  },
  async index (req, res) {
    try {
      const post = await Post.findAll({
        limit: 10
      })
      res.send(post)
    } catch (err) {
      console.log('hey errors', err)
      res.status(400).send({
        error: 'Error has occured trying to fetch posts'
      })
    }
  },
  async show (req, res) {
    try {
      const post = await Post.findById(req.params.postId)
      res.send(post)
    } catch (err) {
      console.log('hey errors', err)
      res.status(400).send({
        error: 'Error has occured trying to fetch posts'
      })
    }
  }
}
