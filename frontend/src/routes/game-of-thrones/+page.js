/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const res = await fetch('https://thrones-api.firefarm.net/api/characters')

  return {
    characters: await res.json()
  } 
}