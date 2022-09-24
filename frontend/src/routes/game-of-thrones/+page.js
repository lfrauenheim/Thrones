/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const res = await fetch('https://thrones-api.firefarm.netapi/got/characters')

  return {
    characters: await res.json()
  } 
}