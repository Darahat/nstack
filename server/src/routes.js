module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Your ${req.body.email} is registered have fun and your password is ${req.body.password} ${req.body.username}`
    })
  })
}
