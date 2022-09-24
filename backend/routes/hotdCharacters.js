const Character = require('../schemas/hotdCharacter')

module.exports = async (req, res) => {
  const tar = await Character.find({nav: 'tar'}).sort({name: 1})
  const vel = await Character.find({nav: 'vel'}).sort({name: 1})
  const hightower = await Character.find({nav: 'hightower'}).sort({name: 1})
  const cole = await Character.find({nav: 'cole'}).sort({name: 1})
  const westerling = await Character.find({nav: 'westerling'}).sort({name: 1})
  const other = await Character.find({nav: 'other'}).sort({name: 1})

  const characters = []

  characters.push({tar: tar, vel:vel, hightower:hightower,cole:cole,westerling:westerling,other:other})
  res.json(characters)
}