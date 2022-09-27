import { charStore } from '$lib/stores/store'

export async function getChar(p) {
  const res = await fetch(`https://thrones-api.firefarm.net/api/got/character/${p}`)
  const data = await res.json()
  charStore.set(data.name)
  return data
}