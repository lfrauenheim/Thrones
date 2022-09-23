const Dragon = require('../schemas/hotd_dragon')

module.exports = async (req, res) => {
  const dragons = await Dragon.find().sort({name: 1})
  res.json(dragons)
}