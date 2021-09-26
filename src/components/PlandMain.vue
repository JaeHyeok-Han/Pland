<template>
  <div class="maincontainer">
    <img src="../assets/main_img.jpg" alt="main페이지">
    <p>해당 웹페이지는 국립 한밭대학교에서 진행하는 하랑 동아리의 프로젝트입니다.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;500&family=Noto+Sans+KR:wght@500&display=swap');
  .maincontainer {
    width: 100%;
    min-height: calc(100vh - 220px);
  }
  .maincontainer img {
    width: 95%;
    border-radius: 5%;
  }
  .maincontainer p {
    font-family: 'Gothic A1', sans-serif;
    margin: 20px 20px;
    line-height: 160%;
  }
</style>