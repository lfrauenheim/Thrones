<script>
  import { fade } from 'svelte/transition'
  export let promiseDragon
</script>

<div class="col-lg-6 d-none d-lg-block mt-lg-0 bg-dark border border-light rounded p-2">
  {#await promiseDragon}
    <!--loading-->
  {:then data} 
    <div class="row">
      <div class="col-12" in:fade>
        <div>
          <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">{data.name}</h2>
          <img src="{data.image}" alt="{data.name}" class="px-5 d-block mx-auto ">
        </div>

        <!--bio-->
        <div>
          <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">Personal information</h2>        
          
          <div class="d-flex border-bottom">
            {#if data.allegiances.length != 0}
              <p class="my-1 text-light"><strong>Allegiances</strong></p>
              <ul class="ms-auto my-1">
                {#each data.allegiances as allegiance}
                  <li class="text-light text-end">{allegiance}</li>
                {/each}
              </ul>
            {/if}
          </div>

          <div class="d-flex border-bottom">
            {#if data.aliases.length != 0}
              <p class="my-1 text-light"><strong>Aliases</strong></p>
              <ul class="ms-auto my-1">
                {#each data.aliases as alias}
                  <li class="text-light">{alias}</li>
                {/each}
              </ul>  
            {/if}
          </div>
        </div>

        <!--bts-->
        <div class="mt-1">
          <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">Behind the scenes information</h2> 
          <div class="d-flex my-1 border-bottom">
            <p class="text-light mb-1 mt-0"><strong>Appeared in</strong></p>
            <p class="text-light ms-auto mb-1 mt-0">{data.appearances}</p>
          </div>
          
          <div class="d-flex my-1 border-bottom">
            <p class="text-light mb-1 mt-0"><strong>First seen</strong></p>
            <p class="text-light ms-auto mb-1 mt-0">{data.firstSeen}</p>
          </div>
          
          <div class="d-flex">
            <p class="m-0 text-light"><strong>Seasons</strong></p>
            <ul class="m-0 ms-auto">
              {#each data.tvSeries as series}
                <li class="text-light">{series}</li>
              {/each}
            </ul> 
          </div>     
        </div>
      </div>
    </div>
  {/await}
</div>

<div class="d-lg-none">
  <!-- Modal -->
  <div class="modal fade" id="dragons" tabindex="-1" aria-labelledby="DragonModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        {#await promiseDragon}
          <!--loading-->
        {:then data} 
          <div class="modal-body">
            <button type="button" class="btn-close bg-light ms-auto d-flex mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="row">
              <div class="col-12" in:fade>
                <div>
                  <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">{data.name}</h2>
                  <img src="{data.image}" alt="{data.name}" class="px-5 d-block mx-auto ">
                </div>
        
                <!--bio-->
                <div>
                  <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">Personal information</h2>        
                  
                  <div class="d-flex border-bottom">
                    {#if data.allegiances.length != 0}
                      <p class="my-1 text-light"><strong>Allegiances</strong></p>
                      <ul class="ms-auto my-1">
                        {#each data.allegiances as allegiance}
                          <li class="text-light text-end">{allegiance}</li>
                        {/each}
                      </ul>
                    {/if}
                  </div>
        
                  <div class="d-flex border-bottom">
                    {#if data.aliases.length != 0}
                      <p class="my-1 text-light"><strong>Aliases</strong></p>
                      <ul class="ms-auto my-1">
                        {#each data.aliases as alias}
                          <li class="text-light">{alias}</li>
                        {/each}
                      </ul>  
                    {/if}
                  </div>
                </div>
        
                <!--bts-->
                <div class="mt-1">
                  <h2 class="text-light text-center bg-danger p-3 mb-0 rounded">Behind the scenes information</h2> 
                  <div class="d-flex my-1 border-bottom">
                    <p class="text-light mb-1 mt-0"><strong>Appeared in</strong></p>
                    <p class="text-light ms-auto mb-1 mt-0">{data.appearances}</p>
                  </div>
                  
                  <div class="d-flex my-1 border-bottom">
                    <p class="text-light mb-1 mt-0"><strong>First seen</strong></p>
                    <p class="text-light ms-auto mb-1 mt-0">{data.firstSeen}</p>
                  </div>
                  
                  <div class="d-flex">
                    <p class="m-0 text-light"><strong>Seasons</strong></p>
                    <ul class="m-0 ms-auto">
                      {#each data.tvSeries as series}
                        <li class="text-light">{series}</li>
                      {/each}
                    </ul> 
                  </div>     
                </div>
              </div>
            </div>
          </div>
        {/await}
      </div>   
    </div>
  </div>
</div>

<style>
  li{
    list-style-type: none;
  }
  ul {
    padding: 0;
  }
  img {
    width: 80%;
    height: 35%;
  }
</style>

