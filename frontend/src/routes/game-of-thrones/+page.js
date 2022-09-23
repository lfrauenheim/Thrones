/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const res = await fetch('http://localhost:3000/api/got/characters')

  return {
    characters: await res.json()
  } 
}