<template>
  <div class="sec4container">
    <div class="notice-container">
      <ul id="noticelist">
        <li v-for="item in notice" :key="item.id">
          {{ item.time }} 에 {{ item.value }}!
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, query, onValue, limitToLast } from "firebase/database";
export default {
  mounted: function() {
    const db = getDatabase();
    const sensingData = query(ref(db, 'notice'), limitToLast(10));
    onValue(sensingData, (snapshot) => {
      this.notice = [];
      Object.values(snapshot.val()).forEach(ele => {
        this.notice.push(ele);
      })
      this.notice.reverse();
    });
  },
  data: function() {
    return {
      notice: [],
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;500&family=Noto+Sans+KR:wght@500&display=swap'); 
  .sec4container {
    min-height: calc(100vh - 220px);
  }
  .sec4container .notice-container {
    padding: 30px 30px;
    margin: 20px;
    background: rgb(224, 224, 224);
    border-radius: 20px;
    font-family: 'Gothic A1', sans-serif;
  }
  .sec4container .notice-container ul li {
    padding: 8px 0;
    border-bottom: 1px solid black;
  }
  .sec4container .notice-container ul li:last-child {
    border: none;
  }
</style>