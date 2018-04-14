const {SavedPost} = require('../models')
// const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const {userId, postId} = req.query
      // console.log('req.query')
      // console.log(req.query)
      // const bookmarks = await SavedPost.findAll()
      // console.log('alskdfjlaskjdf\n\n\n\n\n\n')
      // console.log(bookmarks)

      const bookmark = await SavedPost.findOne({
        where: {
          UserId: userId,
          PostId: postId
        }
      })
      // console.log(bookmark)
      res.send(bookmark)
    } catch (err) {
      console.log('indexs errors', err)
      res.status(500).send({
        error: 'Error has occured trying to fetch bookmarks pOst'
      })
    }
  },
  // async indexShow (req, res) {
  //   try {
  //     const {userId, postId} = req.query
  //     console.log('req.query......................\n\n\n\n\n\n\n')
  //     console.log(req.query)
  //     // const bookmarks = await SavedPost.findAll()

  //     const bookmarks = await SavedPost.findAll({
  //       where: {
  //         UserId: userId,
  //         PostId: postId
  //       }
  //     })
  //     console.log('bookmarksssss \n\n\n\n\n\n\n\n\n')
  //     console.log(bookmarks)
  //     res.send(bookmarks)
  //   } catch (err) {
  //     console.log('indexs errors', err)
  //     res.status(500).send({
  //       error: 'Error has occured trying to fetch bookmarks pOst'
  //     })
  //   }
  // },
  async  delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await SavedPost.findById(bookmarkId)
      console.log(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log('delete errors', err)
      res.status(400).send({
        error: 'Error has occured trying to delete bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const newBookmark = await SavedPost.create({
        UserId: req.body.userId,
        PostId: req.body.postId
      })
      res.send(newBookmark)
    } catch (err) {
      console.log('pst errors', err)
      res.status(400).send({
        error: 'Error has occured trying to create bookmark'
      })
    }
  }
}
