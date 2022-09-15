<script>
  export let data
</script>

<div class="container">
  <div class="row">
    <div class="col-6">
      {#each data.characters as character}
        <a href="/character/{character.name}" data-sveltekit-prefetch>
          {character.name}
        </a>  
      {/each}
    </div>
    <div class="col-6">
      <h1>{data.character.name}</h1>
      <p>Born: {data.character.born}</p>
      <p>Died: {data.character.died}</p>
      <p>Father: {data.character.father}</p>
      <p>Mother: {data.character.mother}</p>
      <p>Spouse: {data.character.spouse}</p>
      <p>Culture: {data.character.culture}</p>
      <h2>Titles:</h2>
      {#each data.character.titles as title}
        <p>{title}</p>
      {/each}
      <h2>Aliases:</h2>
      {#each data.character.aliases as alias}
        <p>{alias}</p>
      {/each}
      <p>Allegiances: {data.character.allegiances}</p>
      <h2>Appearances:</h2>
      {#each data.character.tvSeries as series}
        <p>{series}</p>
      {/each}
      <p>Played By: {data.character.playedBy}</p>
    </div>
  </div>
</div>


