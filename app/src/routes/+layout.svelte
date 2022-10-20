<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <style>
    body, html {
      height: 100%;
      background-color: #212529;
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
    }
  </style>
</svelte:head>


<main>
  <Header></Header>
  <slot></slot>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
</style>
