<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 0px;
}
</style>
