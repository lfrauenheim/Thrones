<script>
  import { writable } from 'svelte/store'

  const charStore = writable(0)
  export let data
  let promise  

  async function getChars(p) {
    const res = await fetch(`http://localhost:3000/api/character/${p}`)
    const data = await res.json()
    charStore.set(data.name)
    return data
  }

  function handleChars(p) {
    promise = getChars(p)
  }
</script>

<div class="row">
  <div class="col-6">
    <div class="list-group">
      {#each data.characters as character}
        {#if $charStore == character.name}
          <a href="javascript:void(0)" class="list-group-item fw-bold active" on:click="{() => handleChars(character.name)}">{character.name}</a>
        {:else}
          <a href="javascript:void(0)" class="list-group-item fw-bold" on:click="{() => handleChars(character.name)}">{character.name}</a>
        {/if}
      {/each}  
    </div>
  </div>
  {#if promise}
    <div class="col-6 bg-light rounded">
      <div class="row">
        {#await promise}
          Loading...
        {:then data} 
          <div class="col-6">
            <h2 class="pt-2">{data.name}</h2>
            <p><strong>Born:</strong> {data.born}</p>
            {#if data.died}
              <p><strong>Died:</strong> {data.died}</p>
            {/if}
            {#if data.father}
              <p><strong>Father:</strong> {data.father}</p>
            {/if}
            {#if data.mother}
              <p><strong>Mother:</strong> {data.mother}</p>
            {/if}
            {#if data.spouse}
              <p><strong>Spouse:</strong> {data.spouse}</p>  
            {/if}
            <p><strong>Culture:</strong> {data.culture}</p>
            <p><strong>Played By:</strong> {data.playedBy}</p>
            <p class="m-0"><strong>Allegiances:</strong></p>
            <ul>
              {#each data.allegiances as allegiance}
                <li>{allegiance}</li>
              {/each}
            </ul>
            <p class="m-0"><strong>Titles:</strong></p>
            <ul>
              {#each data.titles as title}
                <li>{title}</li>
              {/each}
            </ul>
            {#if data.aliases.length != 0}
              <p class="m-0"><strong>Aliases:</strong></p>
              <ul>
                {#each data.aliases as alias}
                  <li>{alias}</li>
                {/each}
              </ul>  
            {/if}
          </div>
          <div class="col-6">
            <img src="{data.image}" alt="{data.name}" class="img-fluid pt-2">
            <p class="m-0"><strong>Appearances:</strong></p>
            <ul>
              {#each data.tvSeries as series}
                <li>{series}</li>
              {/each}
            </ul> 
          </div>
        {/await}
      </div>
    </div>
  {/if}
  
</div>


