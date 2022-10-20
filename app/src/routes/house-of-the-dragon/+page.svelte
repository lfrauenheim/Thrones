<script>
  import HOTD_Head from './HOTD_Head.svelte'
  import HOTD_Dragon from './HOTD_Dragon.svelte'
  import HOTD_Character from './HOTD_Character.svelte'
  import {charStore, state} from '$lib/stores/store'

  export let data
  let promiseDragon
  let promiseCharacter

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

  function handleDragon(p) {
    promiseDragon = getDragon(p)
  }

  function handleChar(p) {
    promiseCharacter = getChar(p)
  }
  
</script>

<HOTD_Head></HOTD_Head>

<div class="container mt-5 px-lg-2">
  <div class="row">
    <!--dragons-->
    <div class="col-lg-6 col-12">
      <div class="accordion " id="accordion">
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              <img class="logo" src="https://thrones-store.firefarm.net/House-Targaryen-Main-Shield.PNG.webp" alt="House Targaryen">&nbsp;<h2 class="text-danger fw-bold">Dragons</h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.dragons as dragon}
                {#if $charStore == dragon.name}
                  <p class="list-group-item fw-bold text-danger m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#dragons" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                  <p class="list-group-item fw-bold text-danger m-0 d-none d-lg-block" role="button" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#dragons" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                  <p class="list-group-item fw-bold text-light m-0 d-none d-lg-block" role="button" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                {/if}
              {/each}  
            </div>
          </div>
        </div>        
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              <img class="logo" src="https://thrones-store.firefarm.net/House-Targaryen-Main-Shield.PNG.webp" alt="House Targaryen">&nbsp;<h2 class="text-danger fw-bold">House Targaryen</h2>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].tar as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-danger m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-danger m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-light m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
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
              <img class="logo" src="https://thrones-store.firefarm.net/House-Velaryon-Main-Shield.PNG.webp" alt="House Velaryon">&nbsp;<h2 class="text-primary fw-bold">House Velaryon</h2>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].vel as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-primary m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-primary m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-light m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
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
              <img class="logo" src="https://thrones-store.firefarm.net/House-Hightower-Main-Shield.PNG.webp" alt="House Hightower">&nbsp;<h2 class="text-success fw-bold">House Hightower</h2>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].hightower as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-success m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-success m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-light m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                {/if}
              {/each}  
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-controls="collapseSeven">
              <h2 class="text-warning fw-bold">Enemies and Allies</h2>
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion">
            <div class="accordion-body p-2">      
              {#each data.characters[0].other as character}
                {#if $charStore == character.name}
                  <p class="list-group-item fw-bold text-warning m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-warning m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0 d-lg-none" role="button" data-bs-toggle="modal" data-bs-target="#characters" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>
                  <p class="list-group-item fw-bold text-light m-0 d-none d-lg-block" role="button" on:click="{() => handleChar(character.name)}">
                    {character.name}
                  </p>                
                {/if}
              {/each}  
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--card-->
      {#if promiseDragon && $state == 'dragon'}
        <HOTD_Dragon {promiseDragon} />
      {/if}
      {#if promiseCharacter && $state == 'char'}
        <HOTD_Character {promiseCharacter} />
      {/if}
  </div>
</div>


<style>
  .logo {
    width: 10%;
  }
</style>
