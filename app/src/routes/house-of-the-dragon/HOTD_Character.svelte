<script>
  import { nav } from '$lib/stores/store'
  import { fade } from 'svelte/transition'

  export let promiseCharacter
  let color

  $: if($nav === "tar") {color = 'bg-danger'}
  $: if ($nav === "vel") {color = 'bg-primary'}
  $: if ($nav === "hightower") {color = 'bg-success'}
  $: if ($nav === "other") {color = 'bg-warning'}
  $: console.log(promiseCharacter)
</script>


<div class="col-lg-6 d-none d-lg-block mt-lg-0 bg-dark border border-light rounded p-2 mb-5" >
  {#await promiseCharacter}
    <!--loading-->
    {:then data} 
    <div class="row">
      <div class="col-12" transition:fade>
        <div>
          <h2 class="text-light text-center p-3 mb-0 rounded {color}">{data.name}</h2>
          <img src="{data.image}" alt="{data.name}" class="px-5 d-block mx-auto ">
        </div>
        
        <!--bio-->
        {#if data.born || data.died}
          <div>
            <h2 class="text-light text-center {color} p-3 mb-0 rounded">Biographical information</h2>        
            {#if data.born}
              <div class="d-flex border-bottom">
                <p class="text-light my-1"><strong>Born</strong></p>  
                <p class="ms-auto text-light my-1">{data.born}</p>
              </div>  
            {/if}
            {#if data.died}
              <div class="d-flex my-1">
                <p class="text-light m-0"><strong>Died</strong></p>
                <p class="text-light m-0 ms-auto"> {data.died}</p>
              </div>           
            {/if}
          </div>
        {/if}
        
        <!--political-->
        <div class="mt-1">
          <h2 class="text-light text-center {color} p-3 mb-0 rounded">Political information</h2> 
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
            {#if data.titles.length != 0}
              <p class="my-1 text-light"><strong>Titles</strong></p>
              <ul class="ms-auto my-1">
                {#each data.titles as title}
                  <li class="text-light text-end">{title}</li>
                {/each}
              </ul>  
            {/if}
          </div>
        </div>
        
        <!--personal-->
        <div class="mt-1">
          <h2 class="text-light text-center {color} p-3 mb-0 rounded">Personal information</h2> 
          <div class="d-flex border-bottom">
            {#if data.aliases.length != 0}
              <p class="my-1 text-light"><strong>Aliases</strong></p>
              <ul class="ms-auto my-1">
                {#each data.aliases as alias}
                  <li class="text-light text-end">{alias}</li>
                {/each}
              </ul>  
            {/if}
          </div>
          {#if data.culture}
            <div class="d-flex my-1 border-bottom">
              <p class="text-light mb-1 mt-0"><strong>Culture</strong></p>
              <p class="text-light ms-auto mb-1 mt-0">{data.culture}</p>
            </div>
          {/if}
          {#if data.religion}
            <div class="d-flex my-1 border-bottom">
              <p class="text-light mb-1 mt-0"><strong>Religion</strong></p>
              <p class="text-light ms-auto mb-1 mt-0">{data.religion}</p>
            </div>
          {/if}
          {#if data.father}
            <div class="d-flex my-1 border-bottom">
              <p class="text-light mb-1 mt-0"><strong>Father</strong></p>
              <p class="text-light ms-auto mb-1 mt-0">{data.father}</p>
            </div>
          {/if}
          {#if data.mother}
            <div class="d-flex my-1 border-bottom">
              <p class="text-light mb-1 mt-0"><strong>Mother</strong></p>
              <p class="text-light ms-auto mb-1 mt-0">{data.mother}</p>
            </div>
          {/if}
          {#if data.spouses}
            <div class="d-flex my-1 border-bottom">
              <p class="text-light mb-1 mt-0"><strong>Spouses</strong></p>
              <p class="text-light ms-auto mb-1 mt-0 text-end">{data.spouses}</p>
            </div>
          {/if}
          {#if data.children.length != 0}
            <div class="d-flex my-1 border-bottom pb-1">
              <p class="m-0 text-light"><strong>Children</strong></p>
              <ul class="ms-auto m-0">
                {#each data.children as child}
                  <li class="text-light text-end">{child}</li>
                {/each}
              </ul>  
            </div>
          {/if}
          {#if data.siblings.length != 0}
            <div class="d-flex border-bottom pb-1">
              <p class="m-0 text-light"><strong>Siblings</strong></p>
              <ul class="ms-auto m-0">
                {#each data.siblings as sibling}
                  <li class="text-light">{sibling}</li>
                {/each}
              </ul>  
            </div>
          {/if}
        </div>
        
        <!--bts-->
        <div class="mt-1">
          <h2 class="text-light text-center {color} p-3 mb-0 rounded">Behind the scenes information</h2> 
          <div class="d-flex my-1 border-bottom">
            <p class="text-light mb-1 mt-0"><strong>Appeared in</strong></p>
            <p class="text-light ms-auto mb-1 mt-0">{data.appearances}</p>
          </div>
          
          <div class="d-flex my-1 border-bottom">
            <p class="text-light mb-1 mt-0"><strong>First seen</strong></p>
            <p class="text-light ms-auto mb-1 mt-0">{data.firstSeen}</p>
          </div>
          
          <div class="d-flex my-1 border-bottom">
            <p class="text-light mb-1 mt-0"><strong>Played By</strong></p>
            <p class="text-light ms-auto mb-1 mt-0">{data.culture}</p>
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
  <div class="modal fade" id="characters" tabindex="-1" aria-labelledby="CharacterModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        {#await promiseCharacter}
            <!--loading-->
        {:then data} 
          <div class="modal-body">
            <button type="button" class="btn-close bg-light ms-auto d-flex mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="row">      
              <div class="col-12" transition:fade>
                <div>
                  <h2 class="text-light text-center p-3 mb-0 rounded {color}">{data.name}</h2>
                  <img src="{data.image}" alt="{data.name}" class="px-5 d-block mx-auto ">
                </div>
                
                <!--bio-->
                {#if data.born || data.died}
                  <div>
                    <h2 class="text-light text-center {color} p-3 mb-0 rounded">Biographical information</h2>        
                    {#if data.born}
                      <div class="d-flex border-bottom">
                        <p class="text-light my-1"><strong>Born</strong></p>  
                        <p class="ms-auto text-light my-1">{data.born}</p>
                      </div>  
                    {/if}
                    {#if data.died}
                      <div class="d-flex my-1">
                        <p class="text-light m-0"><strong>Died</strong></p>
                        <p class="text-light m-0 ms-auto"> {data.died}</p>
                      </div>           
                    {/if}
                  </div>
                {/if}
                
                <!--political-->
                <div class="mt-1">
                  <h2 class="text-light text-center {color} p-3 mb-0 rounded">Political information</h2> 
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
                    {#if data.titles.length != 0}
                      <p class="my-1 text-light"><strong>Titles</strong></p>
                      <ul class="ms-auto my-1">
                        {#each data.titles as title}
                          <li class="text-light text-end">{title}</li>
                        {/each}
                      </ul>  
                    {/if}
                  </div>
                </div>
                
                <!--personal-->
                <div class="mt-1">
                  <h2 class="text-light text-center {color} p-3 mb-0 rounded">Personal information</h2> 
                  <div class="d-flex border-bottom">
                    {#if data.aliases.length != 0}
                      <p class="my-1 text-light"><strong>Aliases</strong></p>
                      <ul class="ms-auto my-1">
                        {#each data.aliases as alias}
                          <li class="text-light text-end">{alias}</li>
                        {/each}
                      </ul>  
                    {/if}
                  </div>
                  {#if data.culture}
                    <div class="d-flex my-1 border-bottom">
                      <p class="text-light mb-1 mt-0"><strong>Culture</strong></p>
                      <p class="text-light ms-auto mb-1 mt-0">{data.culture}</p>
                    </div>
                  {/if}
                  {#if data.religion}
                    <div class="d-flex my-1 border-bottom">
                      <p class="text-light mb-1 mt-0"><strong>Religion</strong></p>
                      <p class="text-light ms-auto mb-1 mt-0">{data.religion}</p>
                    </div>
                  {/if}
                  {#if data.father}
                    <div class="d-flex my-1 border-bottom">
                      <p class="text-light mb-1 mt-0"><strong>Father</strong></p>
                      <p class="text-light ms-auto mb-1 mt-0">{data.father}</p>
                    </div>
                  {/if}
                  {#if data.mother}
                    <div class="d-flex my-1 border-bottom">
                      <p class="text-light mb-1 mt-0"><strong>Mother</strong></p>
                      <p class="text-light ms-auto mb-1 mt-0">{data.mother}</p>
                    </div>
                  {/if}
                  {#if data.spouses}
                    <div class="d-flex my-1 border-bottom">
                      <p class="text-light mb-1 mt-0"><strong>Spouses</strong></p>
                      <p class="text-light ms-auto mb-1 mt-0 text-end">{data.spouses}</p>
                    </div>
                  {/if}
                  {#if data.children.length != 0}
                    <div class="d-flex my-1 border-bottom pb-1">
                      <p class="m-0 text-light"><strong>Children</strong></p>
                      <ul class="ms-auto m-0">
                        {#each data.children as child}
                          <li class="text-light text-end">{child}</li>
                        {/each}
                      </ul>  
                    </div>
                  {/if}
                  {#if data.siblings.length != 0}
                    <div class="d-flex border-bottom pb-1">
                      <p class="m-0 text-light"><strong>Siblings</strong></p>
                      <ul class="ms-auto m-0">
                        {#each data.siblings as sibling}
                          <li class="text-light">{sibling}</li>
                        {/each}
                      </ul>  
                    </div>
                  {/if}
                </div>
                
                <!--bts-->
                <div class="mt-1">
                  <h2 class="text-light text-center {color} p-3 mb-0 rounded">Behind the scenes information</h2> 
                  <div class="d-flex my-1 border-bottom">
                    <p class="text-light mb-1 mt-0"><strong>Appeared in</strong></p>
                    <p class="text-light ms-auto mb-1 mt-0">{data.appearances}</p>
                  </div>
                  
                  <div class="d-flex my-1 border-bottom">
                    <p class="text-light mb-1 mt-0"><strong>First seen</strong></p>
                    <p class="text-light ms-auto mb-1 mt-0">{data.firstSeen}</p>
                  </div>
                  
                  <div class="d-flex my-1 border-bottom">
                    <p class="text-light mb-1 mt-0"><strong>Played By</strong></p>
                    <p class="text-light ms-auto mb-1 mt-0">{data.culture}</p>
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