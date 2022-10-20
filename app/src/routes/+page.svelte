<script>
  import Footer from "./Footer.svelte";
</script>

<svelte:head>
  <title>THRONES</title>
  <style>
    body {
      background-image: url('https://thrones-store.firefarm.net/home.jpg'); 
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
</svelte:head>


<div class="container">
  <div class="list-group mt-5">
    <a href="/game-of-thrones" class="btn btn-outline-danger text-light fw-bold mb-1" data-sveltekit-prefetch>GAME OF THRONES</a>
    <a href="/house-of-the-dragon" class="btn btn-outline-danger text-light fw-bold mb-1" data-sveltekit-prefetch>HOUSE OF THE DRAGON</a>
  </div>
</div>
<Footer></Footer>