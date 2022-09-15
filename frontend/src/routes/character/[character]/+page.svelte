<script>
  import {page} from '$app/stores' 
  import Charlist from "$lib/components/Charlist.svelte";
    
  $: p = $page.params.character
  export let data
</script>

<div class="container">
  <div class="row">
    <Charlist {data} {p} />
    <div class="col-6">
      <h1>{data.character.name}</h1>
      <img src="{data.character.image}" alt="{data.character.name}" class="img-fluid">
      <p>Born: {data.character.born}</p>
      {#if data.character.died}
        <p>Died: {data.character.died}</p>
      {/if}
      <p>Father: {data.character.father}</p>
      <p>Mother: {data.character.mother}</p>
      {#if data.character.spouse}
        <p>Spouse: {data.character.spouse}</p>  
      {/if}
      <p>Culture: {data.character.culture}</p>
      <h2>Titles:</h2>
      {#each data.character.titles as title}
        <p>{title}</p>
      {/each}
      <h2>Aliases:</h2>
      {#each data.character.aliases as alias}
        <p>{alias}</p>
      {/each}
      <h2>Allegiances:</h2>
      {#each data.character.allegiances as allegiance}
        <p>{allegiance}</p>
      {/each}
      <h2>Appearances:</h2>
      {#each data.character.tvSeries as series}
        <p>{series}</p>
      {/each}
      <p>Played By: {data.character.playedBy}</p>
    </div>
  </div>
</div>


