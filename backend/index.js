const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())

const characters = require('./routes/characters')
const character = require('./routes/character')

app.get('/api/characters', characters)
app.get('/api/character/:character', character)

mongoose.connect(process.env.URI, 
  {useNewUrlParser: true},
  () => {console.log('db connected')}
);

app.listen(3000, () => {console.log('server running on port 3000')})


