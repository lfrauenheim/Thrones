<script>
  import { fade } from 'svelte/transition'
  export let promiseCharacter
</script>


<div class="col-lg-6 col-12 mt-lg-0 mt-2 bg-dark rounded">
  {#await promiseCharacter}
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
        {#if data.culture}
          <p class="text-light"><strong>Culture:</strong> {data.culture}</p>
        {/if}
        {#if data.religion}
          <p class="text-light"><strong>Religion:</strong> {data.religion}</p>  
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
        {#if data.children.length != 0}
          <p class="m-0 text-light"><strong>Children:</strong></p>
          <ul>
            {#each data.children as child}
              <li class="text-light">{child}</li>
            {/each}
          </ul>  
        {/if}
        {#if data.siblings.length != 0}
          <p class="m-0 text-light"><strong>Siblings:</strong></p>
          <ul>
            {#each data.siblings as sibling}
              <li class="text-light">{sibling}</li>
            {/each}
          </ul>  
        {/if}
      </div>
      <div class="col-6">
        <img src="{data.image}" alt="{data.name}" class="img-fluid pt-2">
        <p class="text-light"><strong>Appeared in:</strong> {data.appearances}</p>
        <p class="text-light"><strong>First seen:</strong> {data.firstSeen}</p>
        <p class="text-light"><strong>Played By:</strong> {data.playedBy}</p>
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