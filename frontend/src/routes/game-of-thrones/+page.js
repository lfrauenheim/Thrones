/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const res = await fetch('http://65.108.54.1:3000/api/characters')

  return {
    characters: await res.json()
  } 
}