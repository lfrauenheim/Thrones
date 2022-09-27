<script>
  import GOT_Head from './GOT_Head.svelte';
  import GOT_Character from './GOT_Character.svelte';
  import { charStore } from '$lib/stores/store'
  import { getChar } from '$lib/functions/gotFetch'
  
  export let data
  let promise  

  function handleChars(p) {
    promise = getChar(p)
  }
</script>

<GOT_Head></GOT_Head>

<div class="container mt-5 px-lg-2">
  <div class="row">
    <div class="col-lg-6 col-12">
      <div class="accordion " id="accordion">
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              <img class="logo" src="https://thrones-store.firefarm.net/House-Targaryen-Main-Shield.PNG.webp" alt="House Targaryen">&nbsp;<h2 class="text-danger fw-bold">House Targaryen</h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].tar as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-danger m-0" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              <img src="https://thrones-store.firefarm.net/House-Lannister-Main-Shield.PNG.webp" alt="House Lannister" class="logo">&nbsp;<h2 class="fw-bold text-warning">House Lannister</h2>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].lan as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-warning m-0" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {/if}
              {/each} 
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
              <img src="https://thrones-store.firefarm.net/House-Stark-Main-Shield.PNG.webp" alt="House Stark" class="logo">&nbsp;<h2 class="fw-bold text-secondary">House Stark</h2>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].stark as character}
              {#if $charStore == character.name}
                <p class="list-group-item fw-bold text-secondary m-0" on:click="{() => handleChars(character.name)}">
                  {character.name}
                </p>
              {:else}
                <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleChars(character.name)}">
                  {character.name}
                </p>
              {/if}
              {/each}  
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour">
              <img src="https://thrones-store.firefarm.net/House-Baratheon-Main-Shield.PNG.webp" alt="House Baratheon" class="logo">&nbsp;<h2 class="fw-bold text-warning">House Baratheon</h2>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].bar as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-warning m-0" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {/if}
              {/each} 
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-controls="collapseFive">
              <div class="d-flex">
                <h2 class="fw-bold text-secondary">Allies & Enemies</h2>
              </div>              
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
            <div class="accordion-body p-2">
              {#each data.characters[0].allies as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-secondary m-0" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleChars(character.name)}">
                    {character.name}
                  </p>
                {/if}
              {/each} 
            </div>
          </div>
        </div>
      </div>
    </div>
      {#if promise}
        <GOT_Character {promise} />
      {/if}
  </div>
</div>


<style>
  .logo {
    width: 10%;
  }
</style>
