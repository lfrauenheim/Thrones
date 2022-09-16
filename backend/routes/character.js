const Character = require('../schemas/character')

module.exports = async (req, res) => {
  const character = await Character.findOne({name: req.params.character})
  console.log({character})
  res.json(character)
}