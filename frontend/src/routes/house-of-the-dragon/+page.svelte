<script>
  import {charStore} from '$lib/stores/store'
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
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              Characters
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div class="accordion-body p-0">
              <div class="list-group">

              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              Dragons
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