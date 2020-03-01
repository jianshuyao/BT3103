<template>
  <div class = "sticky-top">
    <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #ededed;">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src="../assets/nus.png" width="100" height="42" style="margin:0px 30px 0px 0px">
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link class="nav-link" to="/Home" exact>
              <i class="fas fa-home" aria-hidden="true" ></i>
              Home
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/University" exact>
              <i class="fas fa-university"></i>
              Programs
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/About" exact>
              <i class="fas fa-user"></i>
              About Us
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/Contact" exact>
              <i class="fas fa-envelope"></i>
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav{
  postion: fixed;
}
</style>