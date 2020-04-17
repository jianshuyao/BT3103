<template>
  <div>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <NavBar></NavBar>
    <router-view></router-view>
    <visualisation></visualisation>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Visualisation from './components/Visualisation.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Visualisation,
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
