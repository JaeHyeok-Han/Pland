<template>
  <div class="sec3container">
    <canvas id="myChart" ref="lineChart" style="width: 100vw; height: 400px"></canvas>
  </div>
</template>

<script>
import { getDatabase, ref, query, onValue, limitToLast } from "firebase/database";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  methods: {
    makeChart() {
      const chartArea = document.querySelector('#myChart').getContext('2d');
      this.chart = new Chart(chartArea, {
        type: 'line',
        data: {
          labels: this.time,
          datasets: [{
            label: '온도',
            data: this.tem,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }, {
            label: '습도',
            data: this.hum,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          layout: {
            padding: 25
          },
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              text: '시간별 온습도 그래프',
              align: 'center',
              color: 'rgba(0, 0, 0, 1)',
              display: true,
              position: 'top',
            },
            subtitle: {
              text: '가장 최근 10개의 값을 그래프로 보여줍니다.',
              align: 'center',
              color: 'rgba(0, 0, 0, 0.8)',
              display: true,
              position: 'top',
              padding: {
                bottom: 20
              }
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      })
    }
  },
  async created() {
    const db = getDatabase();
    const sensingData = query(ref(db, 'data'), limitToLast(10));
    await onValue(sensingData, (snapshot) => {
      const timeData = Object.keys(snapshot.val());
      timeData.forEach((ele) => {
        this.time.push(ele.substring(9, 14));
      })
      const data = Object.values(snapshot.val());
      data.forEach((ele) => {
        this.tem.push(ele.temperature);
        this.hum.push(ele.humidity);
      });
      this.chart.update();
    });
  },
  mounted() {
    this.makeChart();
  },
  data() {
    return {
      chart: null,
      time: [],
      tem: [],
      hum: []
    }
  },
}
</script>

<style>
  .sec3container {
    min-height: calc(100vh - 220px);
  }
</style>