<template>
  <div class="sec1container">
    <img class="topimage" src="../../images/image1.png">
    <p><span class="cuscom">Pland</span>는 식물과 손의 합성어로 손 안에서 간편하게 확인이 가능한 식물을 뜻하며 식물을 기르는 누구나 쉽게 이용할 수 있는 웹입니다.</p>
    <p>실시간 데이터베이스를 사용해 시간과 장소에 구애받지 않고 데스크톱, 모바일에서 손쉽게 식물의 상태를 확인할 수 있도록 설계하여 화분에 센서를 설치하고 모니터링을 통해 땅의 영양성분, 수분등을 관측하여 기존보다 양질의 품질, 빠른 성장속도 등의 효율적인 식물 재배를 이끌내는 것이 목적입니다.</p>
    <p>또한 정확한 환경값과 영양상태를 측정한 데이터를 바탕으로 식물의 실시간 상태와 수분과 영양분 공급의 시기를 알려 누구나 쉽게 식물재배를 할 수 있도록 합니다. 더 나아가 소규모 농장, 개인 텃밭등에서 사용가능해 접근성을 높이고 식물 재배의 흥미를 이끌어 내는 기대효과를 가지고 있습니다.</p>
    <img class="bottomimage" src="../../images/image2.png">
  </div>
</template>

<script>
export default {
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;500&family=Noto+Sans+KR:wght@500&display=swap'); 
  .cuscom {
    font-size: 42px;
    color: rgb(100, 192, 100);
  }
  .sec1container {
    overflow-y: scroll;
  }
  .sec1container .topimage {
    width: 230px;
    height: 180px;
    display: block;
    margin: 40px auto;
  }
  .sec1container p {
    margin: 20px;
    font-family: 'Gothic A1', sans-serif;
    line-height: 150%;
  }
  .sec1container .bottomimage {
    display: block;
    margin: 0 auto 50px;
  }
</style>