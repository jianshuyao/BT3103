<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src="../assets/nus.png" width="100" height="40" style="margin:0px 30px 0px 0px">
          <span class="navbar-brand" style="font-size:30px">NUS Exchanger</span>
        </div>
        <ul class="nav navbar-nav">
          <li class="nav-item" v-for="routes in links" v-bind:key="routes.id">
            <router-link class="nav-link" 
            v-bind:to="routes.page">{{ routes.text }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'University',
          page:'/University'
        },
        {
          id: 2,
          text: 'About Us',
          page:'/About'
        },
        {
          id: 3,
          text: 'Contact Us',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>