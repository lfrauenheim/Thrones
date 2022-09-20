<script>
  import { charStore } from '$lib/stores/store'
  import { fade } from 'svelte/transition'

  export let data
  let promise  

  async function getChars(p) {
    const res = await fetch(`http://slayed.ddns.net:3000/api/character/${p}`)
    const data = await res.json()
    charStore.set(data.name)
    return data
  }

  function handleChars(p) {
    promise = getChars(p)
  }
</script>

<svelte:head>
  <title>{$charStore} | Game Of Thrones</title>
  <style>
    body {
      background-image: url('http://slayed.ddns.net:8080/got.jpg'); 
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
</svelte:head>


<div class="container mt-5">
  <div class="row">
    <!--houses-->
    <div class="col-6">
      <div class="accordion " id="accordion">
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              <img class="logo" src="http://slayed.ddns.net:8080/House-Targaryen-Main-Shield.PNG.webp" alt="House Targaryen">&nbsp;<h2 class="text-danger fw-bold">House Targaryen</h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].tar as character}
                {#if $charStore == character.name}
                  <a href="#{character.name}" class="list-group-item fw-bold text-danger" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="#{character.name}" class="list-group-item fw-bold text-light" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              <img src="http://slayed.ddns.net:8080/House-Lannister-Main-Shield.PNG.webp" alt="House Lannister" class="logo">&nbsp;<h2 class="fw-bold text-warning">House Lannister</h2>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].lan as character}
                {#if $charStore == character.name}
                  <a href="#{character.name}" class="list-group-item fw-bold text-warning" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="#{character.name}" class="list-group-item fw-bold text-light" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each} 
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
              <img src="http://slayed.ddns.net:8080/House-Stark-Main-Shield.PNG.webp" alt="House Stark" class="logo">&nbsp;<h2 class="fw-bold text-secondary">House Stark</h2>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].stark as character}
                {#if $charStore == character.name}
                  <a href="#{character.name}" class="list-group-item fw-bold text-secondary" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="#{character.name}" class="list-group-item fw-bold text-light" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour">
              <img src="http://slayed.ddns.net:8080/House-Baratheon-Main-Shield.PNG.webp" alt="House Baratheon" class="logo">&nbsp;<h2 class="fw-bold text-warning">House Baratheon</h2>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].bar as character}
                {#if $charStore == character.name}
                  <a href="#{character.name}" class="list-group-item fw-bold text-warning" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {:else}
                  <a href="#{character.name}" class="list-group-item fw-bold text-light" on:click="{() => handleChars(character.name)}">{character.name}</a>
                {/if}
              {/each} 
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--character card-->
    {#if promise}
      <div class="col-6 bg-dark rounded">
        {#await promise}
          <!--loading-->
        {:then data} 
          <div class="row" in:fade>
            <div class="col-6">
              <h2 class="pt-2 text-light">{data.name}</h2>
              {#if data.born}
                <p class="text-light"><strong>Born:</strong> {data.born}</p>  
              {/if}
              {#if data.died}
                <p class="text-light"><strong>Died:</strong> {data.died}</p>
              {/if}
              {#if data.father}
                <p class="text-light"><strong>Father:</strong> {data.father}</p>
              {/if}
              {#if data.mother}
                <p class="text-light"><strong>Mother:</strong> {data.mother}</p>
              {/if}
              {#if data.spouse}
                <p class="text-light"><strong>Spouse:</strong> {data.spouse}</p>  
              {/if}
              <p class="text-light"><strong>Culture:</strong> {data.culture}</p>
              <p class="text-light"><strong>Played By:</strong> {data.playedBy}</p>
              <p class="m-0 text-light"><strong>Allegiances:</strong></p>
              <ul>
                {#each data.allegiances as allegiance}
                  <li class="text-light">{allegiance}</li>
                {/each}
              </ul>
              {#if data.titles.length != 0}
                <p class="m-0 text-light"><strong>Titles:</strong></p>
                <ul>
                  {#each data.titles as title}
                    <li class="text-light">{title}</li>
                  {/each}
                </ul>  
              {/if}
              
              {#if data.aliases.length != 0}
                <p class="m-0 text-light"><strong>Aliases:</strong></p>
                <ul>
                  {#each data.aliases as alias}
                    <li class="text-light">{alias}</li>
                  {/each}
                </ul>  
              {/if}
            </div>
            <div class="col-6">
              <img src="{data.image}" alt="{data.name}" class="img-fluid pt-2">
              <p class="m-0 text-light"><strong>Appearances:</strong></p>
              <ul>
                {#each data.tvSeries as series}
                  <li class="text-light">{series}</li>
                {/each}
              </ul> 
            </div>
          </div>
        {/await}
      </div>
    {/if}
  </div>
</div>


<style>
  .logo {
    width: 10%;
  }
</style>
