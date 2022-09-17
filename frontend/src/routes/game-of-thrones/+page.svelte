<script>
  import { charStore } from '$lib/stores/store'
  import { fade } from 'svelte/transition'

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

<svelte:head>
  <title>{$charStore} | THRONES</title>
</svelte:head>

<div class="row">
  <div class="col-6">
    <div class="accordion" id="accordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
            <img class="logo" src="http://slayed.ddns.net:8080/House-Targaryen-Main-Shield.PNG.webp" alt="House Targaryen">&nbsp;<h2 class="text-danger fw-bold">House Targaryen</h2>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
          <div class="accordion-body p-0">
            <div class="list-group">
              {#each data.characters[0].tar as character}
                {#if $charStore == character.name}
                  <a href="javascript:void(0)" class="list-group-item fw-bold active" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="javascript:void(0)" class="list-group-item fw-bold" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
            <img src="http://slayed.ddns.net:8080/House-Lannister-Main-Shield.PNG.webp" alt="House Lannister" class="logo">&nbsp;<h2 class="fw-bold text-warning">House Lannister</h2>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
          <div class="accordion-body p-0">
            <div class="list-group">
              {#each data.characters[0].lan as character}
                {#if $charStore == character.name}
                  <a href="javascript:void(0)" class="list-group-item fw-bold active" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="javascript:void(0)" class="list-group-item fw-bold" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
            <img src="http://slayed.ddns.net:8080/House-Stark-Main-Shield.PNG.webp" alt="House Stark" class="logo">&nbsp;<h2 class="fw-bold text-secondary">House Stark</h2>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
          <div class="accordion-body p-0">
            <div class="list-group">
              {#each data.characters[0].stark as character}
                {#if $charStore == character.name}
                  <a href="javascript:void(0)" class="list-group-item fw-bold active" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="javascript:void(0)" class="list-group-item fw-bold" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour">
            <img src="http://slayed.ddns.net:8080/House-Baratheon-Main-Shield.PNG.webp" alt="House Baratheon" class="logo">&nbsp;<h2 class="fw-bold">House Baratheon</h2>
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
          <div class="accordion-body p-0">
            <div class="list-group">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {#if promise}
    <div class="col-6 bg-light rounded">
      {#await promise}
        <!--loading-->
      {:then data} 
        <div class="row" in:fade>
          <div class="col-6">
            <h2 class="pt-2">{data.name}</h2>
            {#if data.born}
              <p><strong>Born:</strong> {data.born}</p>  
            {/if}
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
            {#if data.titles.length != 0}
              <p class="m-0"><strong>Titles:</strong></p>
              <ul>
                {#each data.titles as title}
                  <li>{title}</li>
                {/each}
              </ul>  
            {/if}
            
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
        </div>
      {/await}
    </div>
  {/if}
</div>

<style>
  .logo {
    width: 10%;
  }
</style>
