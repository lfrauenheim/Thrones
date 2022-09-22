<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  <style>
    body, html {
      height: 100%;
      background-color: #212529;
    }
  </style>
</svelte:head>

<div class="container-fluid">
  <div class="container">
    <a href="/" class="text-decoration-none">
      <h1 class="d-flex justify-content-center text-light">THRONES</h1>
    </a>
  </div>
  <slot></slot>
</div>


