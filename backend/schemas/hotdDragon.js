const mongoose = require('mongoose')  

const { Schema } = mongoose

const dragonSchema = new Schema({
  name: String,
  aliases: [String],
  allegiances: [String],
  appearances: [String],
  firstSeen: String,
  image: String,
  tvSeries: [String]
})

const Dragon = mongoose.model('hotd_dragons', dragonSchema)
module.exports = Dragon