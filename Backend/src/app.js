const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
 app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/user', require('../src/router/user.routes'))

app.get('/', (req, res) => {
  res.json({ message: 'testing application' })
})

module.exports = app