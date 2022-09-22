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
      background-position: center;
      height: 100vh;
    }
  </style>
  <title>{$charStore} | House Of The Dragon</title>
</svelte:head>