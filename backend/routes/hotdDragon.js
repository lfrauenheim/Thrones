const Dragon = require('../schemas/hotd_dragon')

module.exports = async (req, res) => {
  const dragon = await Dragon.findOne({name: req.params.dragon})
  res.json(dragon)
}