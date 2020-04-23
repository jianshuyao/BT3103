<template>
<div>
    <!-- Members --> 
    <div class="basic-2">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12"><h2>Who we are</h2></div> <!-- end of col -->
                  <h6>We are Team Withdrawal- the group of NUS Students behind the “SEP Searcher”!
                      We have designed our platform to address the issues students face when searching for
                      student exchange placements and in this way, ensure a smooth journey for all</h6>
              </div> <!-- end of row -->

              <div class="row">
                  <div class="col-lg-12" >
                      <div class="team-member" v-for="member in members" v-bind:key="member.id">
                          <div class="image-wrapper"><img class="img-fluid" :src="member.img"></div> 
                          <p class="p-large">{{member.name}}</p>
                          <p class="job-title">{{member.title}}</p>
                      </div> 
                  </div> <!-- end of col -->
              </div> <!-- end of row -->

          </div> <!-- end of container -->
      </div> <!-- end of basic-2 -->
    
  
    <!-- Functionalities -->  
    <div class="accordion">
        <div class="area-1"></div>
        <div class="area-2">
            <div class="accordion-container">
                <h2>What we offer</h2>
                <div class="item" v-for="(fcn,index) in functions" v-bind:key="fcn.id">
                    <span aria-expanded="true" >
                        <span class="accordion-title"><span class="circle-numbering">{{index+1}}</span>{{fcn.text}}</span>
                    </span>
                </div> 
            </div> 
        </div> 
    </div> 


    <!-- Benefits -->
	<div class="tabs">
      <div class="area-1">
            <div class="tabs-container">
                <h2>Why choose us</h2><br>     
                <div class="item" v-for="(bnf,index) in benefits" v-bind:key="bnf.id">
                    <span aria-expanded="true">
                        <span class="accordion-title"><span class="circle-numbering">{{index+1}}</span>{{bnf.text}}</span>
                    </span>                    
                </div> 
            </div>
        </div><!-- end of area-1 on same line and no space between comments to eliminate margin white space -->
        
        <div class="area-2"></div> <!-- end of area-2 -->
    </div> <!-- end of tabs -->
</div>
</template>



<script>
import database from '../firebase.js'
export default {
name: 'About', //this is the name of the component
data(){
    return {
        members: [],
        functions: [],
        benefits:[]
      }
},
methods:{
    fetchInfo:function(src, dest){
      //Get all the items from DB
      database.collection(src).get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            this.saveInfo(doc, dest)
        })
      })
    },

    saveInfo:function(doc,dest){
      let item={}
      item=doc.data()
      item.show=false
      item.id=doc.id
      dest.push(item)
    }
},
created(){
      this.fetchInfo('members',this.members)
      this.fetchInfo('functions_info',this.functions)
      this.fetchInfo('benefits_info',this.benefits)
    }
}
</script>

<style scoped>
@import './css/styles.css'; 
img {
    width:540px !important; /* you can use % */
    height: 120px !important;
}
.basic-2 .team-member {
	display: inline-block !important;
	max-width: 12rem !important;
	margin-right: 1.5rem !important;
	margin-bottom: 0.5rem !important;
	margin-left: 1.5rem !important;
}
.basic-2 .team-member .p-large {
    margin-bottom: 0.25rem !important;
    font: 400 1.5rem/1.375rem "Montserrat", sans-serif !important;
}
.basic-2 .team-member .job-title {
	margin-bottom: 0.75rem !important;
	color: #484a46 !important;
	font: 700 1.5rem/1.375rem "Montserrat", sans-serif !important;
}
</style>