const Character = require('../schemas/character')

module.exports = async (req, res) => {
  const characters = await Character.find().sort({name: 1})
  res.json(characters)
}