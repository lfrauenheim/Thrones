const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())

const gotCharacters = require('./routes/gotCharacters')
const gotCharacter = require('./routes/gotCharacter')
const hotdDragons = require('./routes/hotdDragons')
const hotdDragon = require('./routes/hotdDragon')

app.get('/api/got/characters', gotCharacters)
app.get('/api/got/character/:character', gotCharacter)
app.get('/api/hotd/dragons', hotdDragons)
app.get('/api/hotd/dragon/:dragon', hotdDragon)

mongoose.connect(process.env.URI, 
  {useNewUrlParser: true},
  () => {console.log('db connected')}
);

app.listen(3000, () => {console.log('server running on port 3000')})


