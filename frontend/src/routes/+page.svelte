<script>
  import { charStore } from '$lib/stores/store'

  charStore.set('')
</script>

<svelte:head>
  <title>THRONES</title>
</svelte:head>

<div class="container">
  <div class="list-group mt-5">
    <a href="/game-of-thrones" class="btn btn-light fw-bold mb-1" data-sveltekit-prefetch>GAME OF THRONES</a>
    <a href="/house-of-the-dragon" class="btn btn-light fw-bold mb-1" data-sveltekit-prefetch>HOUSE OF THE DRAGON</a>
  </div>
</div>

