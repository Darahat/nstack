const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(morgan('conbine'))
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  res.send({
    message: `Your ${req.body.email} is registered have fun and your password is ${req.body.password} ${req.body.username}`
  })
})

app.listen(process.env.PORT || 8081)
