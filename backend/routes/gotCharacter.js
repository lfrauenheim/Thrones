const Character = require('../schemas/got_character')

module.exports = async (req, res) => {
  const character = await Character.findOne({name: req.params.character})
  res.json(character)
}