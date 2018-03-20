const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(morgan('conbine'))
app.use(bodyParser.json())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello there'
  })
})

app.listen(process.env.PORT || 8081)
