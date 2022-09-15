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
  </div>
</div>