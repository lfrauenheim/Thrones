const Character = require('../schemas/hotdCharacter')

module.exports = async (req, res) => {
  const character = await Character.findOne({name: req.params.character})
  res.json(character)
}