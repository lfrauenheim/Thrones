const mongoose = require('mongoose')  

const { Schema } = mongoose

const characterSchema = new Schema({
  name: String,
  born: String,
  died: String,
  allegiances: [String],
  titles: [String],
  aliases: [String],
  culture: String,
  religion: String,
  father: String,
  mother: String,
  spouses: String,
  children: [String],
  siblings: [String],
  tvSeries: [String],
  appearances: [String],
  firstSeen: String,
  playedBy: String,
  nav: String,
  image: String
})

const Character = mongoose.model('hotd_characters', characterSchema)
module.exports = Character