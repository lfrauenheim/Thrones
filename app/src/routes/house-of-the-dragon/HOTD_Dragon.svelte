<script>
  import { fade } from 'svelte/transition'
  export let promiseDragon
</script>

<div class="col-lg-6 col-12 mt-lg-0 mt-2 bg-dark rounded">
  {#await promiseDragon}
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
          <p class="text-light"><strong>First seen:</strong> {data.firstSeen}</p>
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



