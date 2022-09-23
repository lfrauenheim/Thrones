/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const resDragons = await fetch('https://thrones-api.firefarm.net/api/hotd/dragons')

  return {
    dragons: await resDragons.json()
  } 
}