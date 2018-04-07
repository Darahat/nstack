const {Bookmark} = require('../models')
module.exports = {
  async index (req, res) {
    try {
      const {postId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          PostId: postId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      console.log('hey errors', err)
      res.status(400).send({
        error: 'Error has occured trying to fetch bookmarks pOst'
      })
    }
  }
}
