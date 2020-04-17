<template>
  <div>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <NavBar></NavBar>
    <router-view></router-view>
    <visualisation></visualisation><br>
    <horizontal-bar-chart></horizontal-bar-chart><br>
    <line-chart></line-chart><br>
    <pie-chart></pie-chart>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Visualisation from './components/Visualisation.vue';
import HorizontalBarChart from './components/HorizontalBarChart.vue';
import LineChart from './components/LineChart.vue';
import PieChart from './components/PieChart.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Visualisation,
    HorizontalBarChart,
    LineChart,
    PieChart,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
}
</style>
