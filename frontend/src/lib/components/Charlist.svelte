<script>
  export let data
  export let p
</script>

<div class="col-6">
  <div class="list-group">
    {#each data.characters as character}
      {#if p == character.name}
        <a href="/character/{character.name}" class="list-group-item active" data-sveltekit-prefetch>{character.name}</a>  
      {:else}
        <a href="/character/{character.name}" class="list-group-item" data-sveltekit-prefetch>{character.name}</a>
      {/if}  
    {/each}  
  </div>
</div>