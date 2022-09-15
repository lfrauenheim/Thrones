<script>
  import Charlist from "$lib/components/Charlist.svelte";
  export let data
</script>

<div class="container">
  <div class="row">
    <Charlist {data}/>
  </div>
</div>