const Character = require('../schemas/character')

module.exports = async (req, res) => {
  const characters = await Character.find()
  res.json(characters)
}