/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const res = await fetch('http://localhost:3000/api/characters')

  return {
    characters: await res.json()
  } 
}