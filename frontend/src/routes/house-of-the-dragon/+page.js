/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const resDragons = await fetch('https://thrones-api.firefarm.net/api/hotd/dragons')
  const resCharacters = await fetch('https://thrones-api.firefarm.net/api/hotd/characters')

  return {
    dragons: await resDragons.json(),
    characters: await resCharacters.json()
  } 
}