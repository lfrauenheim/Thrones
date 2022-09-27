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
const hotdCharacters = require('./routes/hotdCharacters')
const hotdCharacter = require('./routes/hotdCharacter')
const search = require('./routes/search')

app.get('/api/got/characters', gotCharacters)
app.get('/api/got/character/:character', gotCharacter)
app.get('/api/hotd/dragons', hotdDragons)
app.get('/api/hotd/dragon/:dragon', hotdDragon)
app.get('/api/hotd/characters', hotdCharacters)
app.get('/api/hotd/character/:character', hotdCharacter)
app.get('/api/search', search)

mongoose.connect(process.env.URI, 
  {useNewUrlParser: true}
).catch(err => console.log(err))

mongoose.connection.once('open', () => {
  console.log('db connected')
})

app.listen(3000, () => {console.log('server running on port 3000')})


