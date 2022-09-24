/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const res = await fetch('https://thrones-store.firefarm.netapi/got/characters')

  return {
    characters: await res.json()
  } 
}