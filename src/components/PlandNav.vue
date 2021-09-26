<template>
  <div>
  <ul class="menucontainer">
    <li><router-link to='/menu1'>소개</router-link></li>
    <li><router-link to='/menu2'>환경값</router-link></li>
    <li><router-link to='/menu3'>그래프</router-link></li>
    <li><router-link to='/menu4'>알림</router-link></li>
  </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;500&family=Noto+Sans+KR:wght@500&display=swap');
  .menucontainer {
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    justify-content: space-around;
    font-family: 'Gothic A1', sans-serif;
  }
  .menucontainer li {
    list-style-type: none;
    width: 20%;
    height: 2rem;
    border-radius: 8px;
    line-height: 2rem;
    font-size: 1rem;
  }
  .menucontainer li a {
    color: black;
    text-decoration: none;
  }
  .menucontainer li:active {
    background-color: black;
  }
  .menucontainer li a:active {
    color: white;
  }
</style>