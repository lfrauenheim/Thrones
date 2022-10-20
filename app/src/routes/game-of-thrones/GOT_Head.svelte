<script>
  import { charStore } from '$lib/stores/store'
  
  //reset charStore
  charStore.set('')
</script>

<svelte:head>
  <title>{$charStore} | Game Of Thrones</title>
  <style>
    body {
      background-image: url('https://thrones-store.firefarm.net/got.jpg'); 
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
</svelte:head>

