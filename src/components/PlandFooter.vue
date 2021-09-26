<template>
  <footer class="footercontainer">
    <p class="one">국립 한밭 대학교 | 유성덕명캠퍼스<br>34158 대전광역시 유성구 동서대로 125(덕명동)<br>Tel. 042-821-1114 Fax. 042-825-5395</p>
    <img class="two" src="../assets/school_logo.png" alt="바로가기" v-on:click="go">
  </footer>
</template>

<script>
export default {
  methods: {
    go() {
      window.open('https://www.hanbat.ac.kr/kor/index.do');
    }
  }
}
</script>

<style>
  .footercontainer {
    position: relative;
    display: flex;
    width: 100%;
    background-color: black;
  }
  .footercontainer .one {
    display: inline-block;
    margin: 10px 0 20px 10px;
    text-align: left;
    font-size: .5rem;
    color: rgb(122, 122, 122)
  }
  .footercontainer .two {
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
  }
</style>