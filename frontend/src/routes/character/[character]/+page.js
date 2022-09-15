/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const res = await fetch(`http://localhost:3000/api/character/${params.character}`)
  const all = await fetch('http://localhost:3000/api/characters')
  return{
    character: await res.json(),
    characters: await all.json()
  } 
}


