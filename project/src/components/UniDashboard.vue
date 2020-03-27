<template>
  <div >
    <div class="dashboard-container">
        <div class="dashboard-title">Listen to previous exchangers...</div>
    </div>
    <br>
    <div class="dashboard-container">
        <div class="info-table">
            <div class="dashboard-row">
                <div class="dashboard-column1">
                    <div class="rating">
                        <div class="rating-title">{{this.avg_ratings}}</div>
                        <p class="rating-p">Experience Ratings</p>
                    </div>
                
                </div>
                <div class="dashboard-column2" id="chart">     
                    <Unicharts :university="university" :width="200" :height="150"></Unicharts>    
                </div>

                <div class="dashboard-column3">
                    <div class="info-table">
                        <div class="mapping">
                            <div class="mapping-title">{{this.avg_modules}}</div>
                        <p>Average Modules Mapped</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Unicharts from './UniCharts.js'
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
             
              querySnapShot.forEach(doc=>{
                uni=doc.data()
                uni.show=false
                uni.id=doc.id
                let count_ratings=0
                let count_modules=0
                let total_ratings = 0
                let total_modules = 0
      
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
                //console.log(ratings)
                
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
  flex: 20%;
}
.dashboard-column2{
  flex: 60%;
}
.dashboard-column3{
  flex: 20%;
}
.dashboard-row{
  display: flex;
}
.dashboard-title{
  font-weight: 600;
  font-size: 25px;
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
  padding-bottom: 15px;
  padding-top: 25px;
  font-size: 20px;
  justify-content: center;
}
.rating-title{
  font-weight: 600;
  font-size: 40px;
}
.rating-p{
  text-align: center;
  padding-top: 5px;
}
.mapping{
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 20px;
  justify-content: center;
}
.mapping-title{
  font-weight: 600;
  font-size: 40px;
}
</style>