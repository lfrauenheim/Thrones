const gotCharacter = require('../schemas/gotCharacter')
const hotdCharacter = require('../schemas/hotdCharacter')
const dragon = require('../schemas/hotdDragon')

module.exports = async (req, res) => {
  const { q } = req.query
  
  const gotResults = await gotCharacter.find({name: {$regex: q, $options: 'i'}})  
  const hotdResults = await hotdCharacter.find({name: {$regex: q, $options: 'i'}})  
  const dragonResults = await dragon.find({name: {$regex: q, $options: 'i'}})  

  const results = []

  results.push({got:gotResults, hotd:hotdResults, dragons:dragonResults})

  res.json(results)
}