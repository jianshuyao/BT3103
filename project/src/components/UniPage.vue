<template>
  <div>
    <!-- debug purposes  -->
    <!-- <div>
       <p v-for="uni in uni_data" v-bind:key="uni.id"> check firebase {{uni.university}}</p>
      
      <h1>{{uni_data}}</h1>
    </div> -->

    <div v-for="info in uni_data" v-bind:key="info.id"> 
      <div class="unipage-container">
        <div class="home-content-wrap">
          <div class="w-layout-grid about-grid">
            <div id="w-node-76c147234d34-3e215c33">
              <div class="home-section-wrap">
                
                <h1 class="section-heading">{{info.university}}</h1>
                <br>
                <p class="paragraph-light">{{info.intro}}</p>
              </div>
              <br>
              <div class="info-table table3">
              <a v-bind:href="info.website">
                <div>Learn More</div>
              </a>
              </div>
              <br>
            <!-- </div><img src="./assets/ucsb.png" srcset="images/ucsb-campus-storke-bike-circle-ucen-ocean-p-500.jpeg 500w, images/ucsb-campus-storke-bike-circle-ucen-ocean.jpg 549w" sizes="(max-width: 479px) 94vw, (max-width: 577px) 95vw, 549px" id="w-node-76c147234d3f-3e215c33" alt=""></div> -->
          </div>
        </div>
      </div>
    </div>

    <UniDashboard :university="university"></UniDashboard> 
  
    <div class="unipage-container">

      <div class="info-table table1">
        <div class="info-header">
          <div class="price"><span>Academics</span></div>
          
        </div>
        <ul class="info-list">
          <li><strong>Academic Calendar</strong></li>
            <p>{{info.academic_calendar}}</p>
          <br>
          <div class="border"></div>
          <li><strong>Colleges Accepting Students</strong></li>
          <p><center>{{info.colleges}}</center></p>
          <br>
          <div class="border"></div>
          <li><strong>Module Restriction</strong></li>
          <p>{{info.module_restriction}}</p>
          <br>
          <div class="border"></div>
          <li><strong>MC Exchange Ratio</strong></li>
          <p><center>{{info.mc_ratio}}</center></p>
        </ul>
       <!-- <a href="#">Learn More</a> -->
      </div>

      <div class="info-table table2">
        <div class="info-header">
          <div class="price"><span>Life</span></div>
          
        </div>
        <ul class="info-list">
          <li><strong>Health/Medical Insurance</strong></li>
            <p>{{info.insurance}}</p>
          <br>
          <div class="border"></div>
          <li><strong>Cost of Living</strong></li>
            <p><center>Please refer to <a href= 'http://eap.ucop.edu/guides/reciprocity/Pages/default.aspx'>View Cost of Living</a> (and click on ‘Money Matters’): </center></p>
            <br>
          <div class="border"></div>
          <li><strong>Weather</strong></li>
          <p>{{info.weather}}</p>
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
  background-image: linear-gradient(125deg,#f3f5f7,#e5ebe7);
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
}

.price{
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0;
}

.price span{
  font-size: 30px;
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
  font-size: 14px;
}

.info-list{
  padding: 5px 20px;
}

.info-list li{
  margin: 5px 0;
  font-size: 14px;
  color: #344;
  text-align: center;
}

.border{
  width: 80px;
  height: 1px;
  margin: auto;
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

.table1 .title{
  background-image: linear-gradient(125deg,#3498db,#9b59b6);
}
.table2 .title{
  background-image: linear-gradient(125deg,#34495e,#95a5a6);
}
.table3 .title{
  background-image: linear-gradient(125deg,#e74c3c,#f39c12);
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

@media screen and (max-width:780px) {
  .info-table{
    flex: 100%;
  }
}


</style>