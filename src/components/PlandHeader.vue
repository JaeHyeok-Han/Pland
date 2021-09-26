<template>
  <header class="titlecontainer">
    <h1 class="title"><router-link to="/">HaRang - <span class="p">Pland</span></router-link></h1>
    <h6 class="subtitle">Enjoy your plant growing life</h6>
  </header>
</template>

<script>
export default {
  
}
</script>

<style>
  .titlecontainer {
    margin: 30px auto 20px;
  }
  .title {
    font-family: Ubuntu;
  }
  .title a {
    color: black;
    text-decoration: none;
  }
  .title .p {
    color: rgb(100, 192, 100); 
  }
  .subtitle {
    margin: 10px auto;
    font-family: Ubuntu;
    color: rgba(0, 0, 0, 0.3);
  }
</style>