<script>
  import { fade } from 'svelte/transition'
  export let promise
</script>

<div class="col-lg-6 d-none d-lg-block mt-lg-0 bg-dark rounded">
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
        {#if data.spouses}
          <p class="text-light"><strong>Spouses:</strong> {data.spouses}</p>  
        {/if}
        <p class="text-light"><strong>Culture:</strong> {data.culture}</p>
        <p class="text-light"><strong>Played By:</strong> {data.playedBy}</p>
        {#if data.allegiances.length != 0}
          <p class="m-0 text-light"><strong>Allegiances:</strong></p>
          <ul>
            {#each data.allegiances as allegiance}
              <li class="text-light">{allegiance}</li>
            {/each}
          </ul>
        {/if}
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
        <p class="m-0 text-light"><strong>Seasons:</strong></p>
        <ul>
          {#each data.tvSeries as series}
            <li class="text-light">{series}</li>
          {/each}
        </ul> 
      </div>
    </div>
  {/await}
</div>

<div class="d-lg-none">
  <!-- Modal -->
  <div class="modal fade" id="characters" tabindex="-1" aria-labelledby="CharacterModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        {#await promise}
            <!--loading-->
        {:then data} 
          <div class="modal-header">
            <h2 class="pt-2 text-light">{data.name}</h2>
            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row" in:fade>
              <div class="col-6">
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
                {#if data.spouses}
                  <p class="text-light"><strong>Spouses:</strong> {data.spouses}</p>  
                {/if}
                <p class="text-light"><strong>Culture:</strong> {data.culture}</p>
                <p class="text-light"><strong>Played By:</strong> {data.playedBy}</p>
                {#if data.allegiances.length != 0}
                  <p class="m-0 text-light"><strong>Allegiances:</strong></p>
                  <ul>
                    {#each data.allegiances as allegiance}
                      <li class="text-light">{allegiance}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
              <div class="col-6">
                <img src="{data.image}" alt="{data.name}" class="img-fluid pt-2">
                <p class="m-0 text-light"><strong>Seasons:</strong></p>
                <ul>
                  {#each data.tvSeries as series}
                    <li class="text-light">{series}</li>
                  {/each}
                </ul> 
              </div>
            </div>
            <div class="row" in:fade>
              <div class="col-12">
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
            </div>
          </div>
        {/await}
      </div>   
    </div>
  </div>
</div>