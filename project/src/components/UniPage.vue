<template>
  <div>
    <!-- debug purposes  -->
    <!-- <div>
       <p v-for="uni in uni_data" v-bind:key="uni.id"> check firebase {{uni.university}}</p>
      
      <h1>{{uni_data}}</h1>
    </div> -->

    <div v-for="info in uni_data" v-bind:key="info.id"> 
      <div class="unipage-container">
                
        <h1>{{info.university}}</h1>
        <br>
        <div class="list-content">{{info.intro}}</div>
        <br>
        <div class="info-table table3">
          <a v-bind:href="info.website">
            Learn More
          </a>
      </div>
    </div>
    
    

    <UniDashboard :university="university"></UniDashboard> 
  
    <div class="unipage-container">

      <div class="info-table table1">
        <div class="info-header">
          <div class="price">Academics</div>
          
        </div>
        <ul class="info-list">
          <li><strong class="list-title">Academic Calendar</strong></li>
            <div class="list-content">{{info.academic_calendar}}</div>
          <br>
          <div class="border"></div>
          <li><strong class="list-title">Colleges Accepting Students</strong></li>
            <div class="list-content"><center>{{info.colleges}}</center></div>
          <br>
          <div class="border"></div>
          <li><strong class="list-title">Module Restriction</strong></li>
            <div class="list-content">{{info.module_restriction}}</div>
          <br>
          <div class="border"></div>
          <li><strong class="list-title">MC Exchange Ratio</strong></li>
            <div class="list-content"><center>{{info.mc_ratio}}</center></div>
        </ul>
       <!-- <a href="#">Learn More</a> -->
      </div>

      <div class="info-table table2">
        <div class="info-header">
          <div class="price">Life</div>
          
        </div>
        <ul class="info-list">
          <li><strong class="list-title">Health/Medical Insurance</strong></li>
            <div class="list-content">{{info.insurance}}</div>
          <br>
          <div class="border"></div>
          <li><strong class="list-title">Cost of Living</strong></li>
            <div class="list-content"><center>{{info.cost_of_living}}</center></div>
            <br>
          <div class="border"></div>
          <li><strong class="list-title">Weather</strong></li>
            <div class="list-content">{{info.weather}}</div>
        </ul>
        <!-- <a href="#">Learn More</a> -->
      </div>
    </div>
 
  </div>
  </div>
</template>

<script>
import database from '../firebase.js'
import UniDashboard from './UniDashboard'

export default {
  props:['university'],
  components:{
    UniDashboard
  },
  data() {
      return{
          uni_data:[]
      }
  },
  methods:{
      fetchItems:function(){
      database.collection('programs').get().then((querySnapShot)=>{
        let uni={}
       
        querySnapShot.forEach(doc=>{
          uni=doc.data()
          uni.show=false
          uni.id=doc.id

          if (uni.university == this.university) {
            this.uni_data.push(uni)
          }
          //console.log(this.uni_data)   
        })
      })
    },
  },
  mounted(){
      this.fetchItems()
  }
}
</script>


<style>
  *{
  margin: 0;
  padding: 0;
  font-family: "Open Sans",sans-serif;
  text-decoration: none;
  list-style: none;
}

body{
  min-height: 100vh;
  /*background-image: linear-gradient(125deg,#f3f5f7,#e5ebe7);*/
  background: transparent !important;
}


.unipage-container{
  max-width: 1000px;
  margin: auto;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}

.info-table{
  flex: 1;
  margin: 10px;
}

.info-header{
  position: relative;
  margin-bottom: 10px;
  background-color: #099453 !important;
  color: white !important;
}

.price{
  font-size: 30px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0 !important;
}

.title{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,50%);
  width: 80%;
  max-width: 360px;
  text-align: center;
  padding: 8px 0;
  font-size: 17px;
}

.info-list{
  padding: 5px 20px;
  background-color: rgb(245, 245, 245) !important;
}

.info-list li{
  margin: 5px 0;
  font-size: 17px;
  color: #344;
  text-align: center;
}

.border{
  width: 80px;
  height: 1px;
  margin: auto;
}

.info-table{
  background-color: rgb(245, 245, 245) !important;
}

.info-table a{
  display: block;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
  border: 1px solid;
  max-width: 360px;
  transition: .2s linear;
}
.info-table a:hover{
  border-radius: 30px;
}

.table1 a{
  color: #099453;
}
.table2 a{
  color: #099453;
}
.table3 a{
  color: #099453;
}
.table3{
  background: transparent !important;
}

.table1 a:hover{
  background: #0ba12b;
  color: #fff;
}
.table2 a:hover{
  background: #099453;
  color: #fff;
}
.table3 a:hover{
  background: #099453;
  color: #fff;
}
.list-content{
  font-size:16px !important;
  line-height: 1.5;
  color: #787976;
  padding-bottom: 10px;
}
.list-title{
  font-size:16px !important;
  line-height: 1.5;
  color:#484a46;
}
/* @media screen and (max-width:780px) {
  .info-table{
    flex: 100%;
  }
} */


</style>
