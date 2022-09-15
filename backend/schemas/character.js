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
  allegiances: String,
  tvSeries: [String],
  playedBy: String
})

const Character = mongoose.model('Character', characterSchema)
module.exports = Character