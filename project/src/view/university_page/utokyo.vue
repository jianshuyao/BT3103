<template>
  <div>
    <div class="unipage-image">
        <img src="./assets/utokyo.png" class="img-thumbnail" height="300" width="2000">
    </div>
   
    <Unipage :university="university"></Unipage>

    
    <div class="info-table table3">
        <router-link to="/University">Go Back to Programme list</router-link>
    </div>

  </div>
</template>

<script>
import Unipage from '../../components/UniPage'

export default {
  components: {
    Unipage
  },

  data(){
    return{
      university: "University of Tokyo",
    }
  },
}
</script>

<style>
.unipage-image{
  max-width: 1000px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>