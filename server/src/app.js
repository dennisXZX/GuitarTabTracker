console.log('Yo mate, your server is up and running')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// use middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// define routes
app.get('/status', (req, res) => {
  res.send({
    message: 'hello'
  })
})

app.listen(process.env.PORT || 8081)
