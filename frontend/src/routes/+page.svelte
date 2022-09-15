<script>
  export let data
  console.log({data})
</script>

{#each data.data as character}
  {character.name}
{/each}