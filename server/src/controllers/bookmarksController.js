const {Bookmark} = require('../models')
module.exports = {
  async index (req, res) {
    try {
      const {userId, postId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          PostId: postId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      console.log('indexs errors', err)
      res.status(500).send({
        error: 'Error has occured trying to fetch bookmarks pOst'
      })
    }
  },
  async  delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
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
      // const userId = req.user.id
      const {userId, postId} = req.body

      const bookmark = await Bookmark.findOne({
        where: {
          PostId: postId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'Already have this set of Bookmark'
        })
      }
      // const bookmark = req.body
      const newBookmark = await Bookmark.create({
        PostId: postId,
        UserId: userId
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
