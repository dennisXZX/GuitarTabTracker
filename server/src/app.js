const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

// create an Express app
const app = express()

// use middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// import routes
require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
