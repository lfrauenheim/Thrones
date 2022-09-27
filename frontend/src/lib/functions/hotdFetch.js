import {charStore, state} from '$lib/stores/store'

export async function getChar(p) {
  const res = await fetch(`https://thrones-api.firefarm.net/api/hotd/character/${p}`)
  const data = await res.json()
  charStore.set(data.name)
  state.set('char')
  return data
}


export async function getDragon(p) {
  const res = await fetch(`https://thrones-api.firefarm.net/api/hotd/dragon/${p}`)
  const data = await res.json()
  charStore.set(data.name)
  state.set('dragon')
  return data
}