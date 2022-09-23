const mongoose = require('mongoose')  

const { Schema } = mongoose

const characterSchema = new Schema({
  name: String,
  born: String,
  died: String,
  father: String,
  mother: String,
  spouse: String,
  image: String,
  culture: String,
  titles: [String],
  aliases: [String],
  allegiances: [String],
  tvSeries: [String],
  playedBy: String,
  nav: String
})

const Character = mongoose.model('got_characters', characterSchema)
module.exports = Character