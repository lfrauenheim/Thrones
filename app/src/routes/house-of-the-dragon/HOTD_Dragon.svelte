<script>
  import { fade } from 'svelte/transition'
  export let promiseDragon
</script>

<div class="col-lg-6 d-none d-lg-block mt-lg-0 bg-dark rounded">
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

<div class="d-lg-none">
  <!-- Modal -->
  <div class="modal fade" id="dragons" tabindex="-1" aria-labelledby="DragonModal" aria-hidden="true">
    <div class="modal-dialog">
      {#await promiseDragon}
        <!--loading-->
      {:then data} 
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h2 class="pt-2 text-light">{data.name}</h2>
            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">            
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
          </div>
        </div>   
      {/await}
    </div>
  </div>
</div>



