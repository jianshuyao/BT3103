<template>
  <div >
    <div class="dashboard-container">
        <div class='dashboard-title'>Listen to previous exchangers...</div>
    </div>
    <br>
    <div class="dashboard-container">
        <div class="info-table">
            <div class="dashboard-row">
                <div class="dashboard-column1">
                      <div class="rating">
                          <h1 class="rating-title">{{this.avg_ratings}}</h1>
                          <div class="rating-p">Experience Ratings</div>
                      </div>
                </div>

                <div class="dashboard-column2" id="chart">     
                    <Unicharts :university="university" :width="200" :height="150"></Unicharts>    
                </div>

                <div class="dashboard-column3">
                      <div class="rating">
                            <h1 class="rating-title">{{this.avg_modules}}</h1>
                            <div class="rating-p">Avg. Modules Mapped</div>
                      </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Unicharts from './UniChart.js'
import database from '../firebase.js'

export default {
    props:['university'],
  components: {
    Unicharts
  },

  data(){
    return{
        avg_ratings: 0,
        avg_modules: 0

    }
  },
  methods:{
      fetchSurvey:function(){
            console.log(this.university)
            database.collection('survey').get().then((querySnapShot)=>{
              let uni={}
              let count_ratings=0
              let count_modules=0
              let total_ratings = 0
              let total_modules = 0
             
              querySnapShot.forEach(doc=>{
                uni=doc.data()
                uni.show=false
                uni.id=doc.id

                if (uni.university == this.university) {
                  count_ratings += 1
                  count_modules += 1
                  total_ratings += uni['rating']
                  total_modules += uni['modules']
                }
                //console.log(count_ratings)
                //console.log(total_ratings)
                this.avg_ratings = (total_ratings / count_ratings).toFixed(1)
                this.avg_modules = (total_modules / count_modules).toFixed(1)
                if (count_ratings == 0){
                  this.avg_ratings = 0
                }
                if (count_modules == 0){
                  this.avg_modules = 0
                } 
                //console.log("ratings:", total_ratings)
                //console.log("modules:", total_modules)
                
              //console.log(this.chart.datasets[0].data)   
              })
            })
          }
  },
  mounted(){
      this.fetchSurvey()
  }
}
</script>

<style>
.dashboard-container{
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.dashboard-column1{
  flex: 18%;
  position: relative;
}
.dashboard-column2{
  flex: 60%;
}
.dashboard-column3{
  flex: 22%;
  position: relative;
}
.dashboard-column4{
  flex: 50%;
  position: relative;
}
.dashboard-row{
  display: flex;
}
.dashboard-title{
  font-weight: 600;
  font-size: 25px !important;
  color: #484a46 !important;
}
.info-table a{
  display: block;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;
  border: 1px solid;
  max-width: 360px;
  transition: .2s linear;
}
.dashboard-chart{
  display: flex;
}
.rating{
  text-align: center;
  font-size: 20px;
  justify-content: center;
  color: #484a46 !important;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) 
}
.rating-title{
  font-weight: 600 !important;
  font-size: 40px !important;
  color: #484a46 !important;
}
h1{
  margin-bottom: 20px !important;
}
.rating-p{
  color: gray !important;
  font-size: 16px;
}
</style>