<script>
  import {charStore} from '$lib/stores/store'
  
  //reset charStore
  charStore.set('')
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



