<script>
  import {charStore} from '$lib/stores/store'
  import { fade } from 'svelte/transition'

  //reset charStore
  charStore.set('')

  export let data
  let promise  

  async function getDragon(p) {
    const res = await fetch(`https://thrones-api.firefarm.net/api/hotd/dragon/${p}`)
    const data = await res.json()
    charStore.set(data.name)
    return data
  }

  function handleDragon(p) {
    promise = getDragon(p)
  }
</script>

<svelte:head>
  <style>
    body {
      background-image: url('https://thrones-store.firefarm.net/hotd.jpg'); 
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  </style>
  <title>{$charStore} | House Of The Dragon</title>
</svelte:head>

<div class="container mt-5 px-0 px-lg-2">
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
                  <p class="list-group-item fw-bold text-danger m-0" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                {:else}
                  <p class="list-group-item fw-bold text-light m-0" role="button" on:click="{() => handleDragon(dragon.name)}">
                    {dragon.name}
                  </p>
                {/if}
              {/each}  
            </div>
          </div>
        </div>        
      </div>
    </div>
    <!--card-->
      {#if promise}
        <div class="col-lg-6 col-12 mt-lg-0 mt-2 bg-dark rounded">
          {#await promise}
            <!--loading-->
          {:then data} 
            <div class="row" in:fade>
              <div class="col-6">
                <h2 class="pt-2 text-light">{data.name}</h2>                
                {#if data.allegiances.length != 0}
                  <p class="m-0 text-light"><strong>Allegiances:</strong></p>
                  <ul>
                    {#each data.allegiances as allegiance}
                      <li class="text-light">{allegiance}</li>
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
                {#if data.firstSeen}
                  <p class="text-light"><strong>First Seen:</strong> {data.firstSeen}</p>
                {/if}
                <p class="text-light"><strong>Appeared in:</strong> {data.appearances}</p>
                <p class="m-0 text-light"><strong>Seasons:</strong></p>
                <ul>
                  {#each data.tvSeries as series}
                    <li class="text-light">{series}</li>
                  {/each}
                </ul> 
              </div>
              <div class="col-6">
                <img src="{data.image}" alt="{data.name}" class="img-fluid pt-2">                
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
