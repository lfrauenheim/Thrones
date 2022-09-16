const Character = require('../schemas/character')

module.exports = async (req, res) => {
  const tar = await Character.find({nav: 'tar'}).sort({name: 1})
  const lan = await Character.find({nav: 'lan'}).sort({name: 1})
  const stark = await Character.find({nav: 'stark'}).sort({name: 1})
  
  const characters = []

  characters.push({tar: tar, lan:lan, stark:stark})

  res.json(characters)
}