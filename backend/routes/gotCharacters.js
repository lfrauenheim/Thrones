const Character = require('../schemas/gotCharacter')

module.exports = async (req, res) => {
  const tar = await Character.find({nav: 'tar'}).sort({name: 1})
  const lan = await Character.find({nav: 'lan'}).sort({name: 1})
  const stark = await Character.find({nav: 'stark'}).sort({name: 1})
  const bar = await Character.find({nav: 'bar'}).sort({name:1})
  const allies = await Character.find({nav: 'allies'}).sort({name:1})
  
  const characters = []

  characters.push({tar: tar, lan:lan, stark:stark,bar:bar, allies:allies})

  res.json(characters)
}