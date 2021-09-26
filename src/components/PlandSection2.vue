<template>
  <div class="sec2container">
    <div class="timebox">
    </div>
    <div class="itemBox">
      <div class="box">
        <div class="cir">
          <i class="fas fa-thermometer-three-quarters icon"></i>
        </div>
        <div class="info">
          온도<br>
        </div>
      </div>
      <div class="box">
        <div class="cir">
          <i class="fas fa-tint icon"></i>
        </div>
        <div class="info">
          습도<br>
        </div>
      </div>
      <div class="box">
        <div class="cir">
          <i class="fas fa-seedling icon"></i>
        </div>
        <div class="info">
          토양수분<br>
        </div>
      </div>
      <div class="box">
        <div class="cir">
          <i class="fas fa-sun icon"></i>
        </div>
        <div class="info">
          광량<br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, query, onValue, limitToLast } from "firebase/database";
export default {
  mounted: function() {
    const timeBox = document.querySelector('.timebox');
    const infoArray = document.querySelectorAll('.info');

    const db = getDatabase();
    const sensingData = query(ref(db, 'data'), limitToLast(1));
    onValue(sensingData, (snapshot) => {
      const time = Object.keys(snapshot.val())[0];
      const data = Object.values(Object.values(snapshot.val())[0]);
      timeBox.innerHTML = time;
      infoArray.forEach((ele, i) => {
        ele.innerHTML = ele.innerHTML + data[i];
      });
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;500&family=Noto+Sans+KR:wght@500&display=swap');
  .sec2container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 220px);
    font-family: 'Gothic A1', sans-serif;
  }
  .timebox {
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0 15px;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    font-size: 18px;
  }
  .itemBox {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .itemBox .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 200px;
    margin: 10px 0;
    padding: 25px 25px;
    border-radius: 15px;
  }
  .itemBox .box .cir {
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: white;
    text-align: center;
    font-size: 35px;
    justify-content: center;
    align-items: center;
  }
  .itemBox .box .info {
    margin-top: 25px;
    line-height: 150%;
    font-size: 18px;
  }
  .itemBox .box:nth-child(1) {
    background-color: #ffb8b8;
  }
  .itemBox .box:nth-child(1) .cir{
    color: #ff3131;
  }
  .itemBox .box:nth-child(2) {
    background-color: #cdcdff;
  }
  .itemBox .box:nth-child(2) .cir{
    color: #4646ff;
  }
  .itemBox .box:nth-child(3) {
    background-color: #a6e7a6;
  }
  .itemBox .box:nth-child(3) .cir{
    color: #25a325;
  }
  .itemBox .box:nth-child(4) {
    background-color: #ece49d;
  }
  .itemBox .box:nth-child(4) .cir{
    color: #ffee51;
  }
  
</style>