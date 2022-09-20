<script>
  import {charStore} from '$lib/stores/store'
  
  //reset charStore
  charStore.set('')
</script>

<svelte:head>
  <style>
    body {
    background-image: url('http://slayed.ddns.net:8080/hotd.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  <title>{$charStore} | House Of The Dragon</title>
</svelte:head>

<div class="container mt-5">
  <div class="row">
    <!--characters & dragons-->
    <div class="col-6">
      <div class="accordion" id="accordion">
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              <h2 class="text-light fw-bold">Characters</h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div class="accordion-body p-0">
              <div class="list-group">

              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-dark border-1 border-secondary">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fw-bold fs-5 bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              <h2 class="fw-bold text-light">Dragons</h2>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div class="accordion-body p-0">
              <div class="list-group">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .logo {
    width: 10%;
  }
</style>