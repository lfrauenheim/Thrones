/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const resDragons = await fetch('http://localhost:3000/api/hotd/dragons')

  return {
    dragons: await resDragons.json()
  } 
}