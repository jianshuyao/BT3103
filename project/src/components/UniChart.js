//import { HorizontalBar, mixins } from 'vue-chartjs'
import { HorizontalBar} from 'vue-chartjs'
//const { reactiveProp } = mixins
import database from '../firebase.js'

export default{
    extends:HorizontalBar,
    //mixins: [reactiveProp],
    props: ['university'],
    data(){
        
        return{
            survey: [],
            chart:{
                labels: ['*','**','***','****','*****'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#099453',
                    data: [1,2,3,4,5],
                    categoryPercentage: 0.6,
                    }
                ]
            },
            options:{
                title:{
                    display:false,
                    text:'Ratings',
                    fontColor:'Black',
                    fontSize:15
                },
                legend: {
                    display: false
                  },
                scales:{
                  yAxes: [{
                    ticks: {
                        fontSize: 25
                    },
                    gridlines:{
                        display: false
                    },
                    //barPercentage: 0.6,
                  }],
                  xAxes: [{
                    ticks: {
                        display: false
                    },
                    gridlines:{
                        display: false
                    }
                  }],
                },   
                responsive: true, maintainAspectRatio: false
            }
        }
    },
    methods:{
        fetchSurvey:function(){
            console.log(this.university)
            database.collection('survey').get().then((querySnapShot)=>{
              let uni={}
              let ratings = [0,0,0,0,0]
             
              querySnapShot.forEach(doc=>{
                uni=doc.data()
                uni.show=false
                uni.id=doc.id
      
                if (uni.university == this.university) {
                  this.survey.push(uni)
                  let rating = uni['rating']
                  ratings[rating-1] += 1
                }
      
                //console.log(ratings)
                
                for (let i = 0; i < ratings.length; i++){
                  this.chart.datasets[0].data[i] = ratings[i]
                }
              //console.log(this.chart.datasets[0].data)   
              })
              console.log(this.chart)
              this.renderChart(this.chart, this.options)
            })
          }
    },
    mounted(){
        this.fetchSurvey()
        //this.renderChart(this.chartData, this.options)
    }
}