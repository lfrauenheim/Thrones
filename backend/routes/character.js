const Character = require('../schemas/character')

module.exports = async (req, res) => {
  const character = await Character.findOne({name: req.params.character})
  res.json(character)
}