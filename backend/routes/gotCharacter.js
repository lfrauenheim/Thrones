const Character = require('../schemas/gotCharacter')

module.exports = async (req, res) => {
  const character = await Character.findOne({name: req.params.character})
  res.json(character)
}