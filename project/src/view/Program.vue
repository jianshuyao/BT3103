<template>
 <div v-cloak>
  <router-view></router-view>
  <div class="uni_container">
    
    <!-- search box -->
    <div class="col-15">
      <div class="md-form">
          <input type="text" class="form-control" placeholder="Search Opportunities" v-model="searchbox">
        </div>
    </div>


    <!-- filters -->
    <button class="filterButton" v-on:click="hideFilter = !hideFilter"> 
      <i class="fas fa-filter">Click to Add Filters</i> 
    </button>

    <div v-if="!hideFilter" class="Row">
      
      <!-- location filter -->
      <div class='locFilter Col'>
        <button v-on:click="hideLocationFilter = !hideLocationFilter"><i class="fas fa-map">Location Filter</i></button>
        <br>
        <div v-if="!hideLocationFilter">
          <multiselect v-model="filterLocation" 
                      :options="country_list" 
                      :multiple="true" 
                      group-values="countries" 
                      group-label="continent" 
                      :group-select="true" 
                      placeholder="Type to search">
                      <span slot="noResult">Oops! No elements found. Consider modifying the search query.</span></multiselect>
        <br>
        </div>
      </div>

      <!-- length filter -->
      <div class='lenthFilter Col'>
        <button v-on:click="hideLengthFilter = !hideLengthFilter"><i class="fas fa-calendar-alt">Program Length Filter</i></button>
        <div v-if="!hideLengthFilter">
          <ejs-slider id="range"
                      ref="rangeSlider"
                      v-model="filterLength"
                      :type="rangetype"
                      :enabled="enabled"
                      :min="min"
                      :max="max"
                      :step="step"
                      :ticks="rangeticks"></ejs-slider>
          <p class='filterContent'>Filtered Program Length: {{filterLength[0]}} ~ {{filterLength[1]}} Months</p>
        <br>

        </div>
      </div>
      
    </div>

    <br>
    <ul>
      <div class="cards-2">
          <div class="col-lg-12" >
              <!-- Card -->
              <div class="card" v-for="university in getUniversities" v-bind:key="university.id"  >
                  
                  <div class="card-body">
                    <div class="card-image" >
                      <img class="img-fluid" :src="university.introPic">
                       </div>
                    <h3 class="card-title">{{ university.university }}</h3>
                    <p>
                      {{ university.location }} • 
                      <span class="month">{{ university.semesterLength}} Months </span>
                      </p>
                    
                  </div>
                  <div class="button-container">
                      <a class="btn-solid-reg page-scroll" @click="goToUniLink(university)">DETAILS</a>
                  </div> <!-- end of button-container -->
              </div>

          </div> <!-- end of col -->

        
      </div>

    </ul>
    
  </div>
</div>
</template>



<script>
import Vue from "vue";
import database from '../firebase.js';
import Multiselect from 'vue-multiselect';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


export default {
 

  components: {
    Multiselect
  },

  data(){
    return{
        hideFilter: true,
        hideLocationFilter: true,
        hideLengthFilter: true,
      
        // filters settings
        uniList: [],
        searchbox: '',
        // location filter settings
        filterLocation: [],
        country_list: [
          {
            continent: 'North America',
            countries: ['United States', 'Canada']
          },
          {
            continent: 'Asia Pacific',
            countries: ['China', 'Japan']
          },
          {
            continent: 'Europe',
            countries: ['United Kingdom', 'Switzerland', 'Germany', 'France']
          }
        ],
        // length filter settings
        min: 0,
        max: 12,
        step: 1,
        filterLength: [0,12],
        rangetype: "Range",

        rangeticks: {
          placement: "After",
          largeStep: 3,
          smallStep: 1,
          showSmallTicks: true,
          
      },
        
        }
  },

  methods:{
    fetchUniversities:function(){
      let university={}
      //Get all the items from DB
      database.collection('programs').get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            //console.log(doc.id+"==>"+doc.data())
            university=doc.data()
            university.show=false
            university.id=doc.id
            this.uniList.push(university)
        })
      })
    }, 

    // make the whole box clickable
    goToUniLink(university) {
      this.$router.push(`/${university.link}`);
    }
 
  },
  //Lifecycle hook
  created(){
      this.fetchUniversities()
  },

  computed: {

    // sortedArray: function() {
    //   function compare(a, b) {
    //     if (a.continent < b.continent)
    //       return -1;
    //     if (a.continent > b.continent)
    //       return 1;
    //     return 0;
    //   }
    //   return this.country_list.sort(compare);
    // },

    // sortedArray(){
    //   return this.country_list.sort((a, b) => a.continent - b.continent );
    // },

    getUniversities() {
      var universities = this.uniList.filter((university) => {
          return university.university.toLowerCase().includes(this.searchbox.toLowerCase());
        });
    
      // location filter
      if (this.filterLocation != "") {
        var query1 = universities.filter((university) => {
          return university.location.toLowerCase().includes(this.filterLocation[0].toLowerCase());
        });

        if (this.filterLocation.length >= 1) {
          for (let i = 1; i < this.filterLocation.length; i++) {
            query1 = query1.concat(universities.filter((university) => {
              return university.location.toLowerCase().includes(this.filterLocation[i].toLowerCase());
            }));
          }
        }

        // program length filter - when location fliter is not empty
        if (this.filterLength !="") {
          var query2 = query1.filter((university) => {
            return university.semesterLength >= this.filterLength[0] && university.semesterLength <= this.filterLength[1];
          });
          return query2
        }

        return  query1;
      }
      // program length filter - when location filter is empty
      if (this.filterLength !="") {
        var query3 = universities.filter((university) => {
          return university.semesterLength >= this.filterLength[0] && university.semesterLength <= this.filterLength[1];
        });
        return query3
      }
      return universities;
    }
    
    }
}


</script>

<style>
@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");
@import url("https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css");
@import url("https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css");
@import url("https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css");
@import url("https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css");
@import url("https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css");
@import url("https://cdn.syncfusion.com/ej2/ej2-vue-inputs/styles/material.css");
@import './css/styles.css';
$material-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);

[v-cloak] {
  display: none;
}

body {
  margin: 0;
  padding: 0;
  background-color: #F3F5F7;
  /* font-family: 'Open Sans', sans-serif; */
}

.filterContent{
  font: 500 1.5rem/1.75rem "Montserrat", sans-serif;
  color: #fbfbfb;
  margin-top: 1.5rem;
}

.box {
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* box-shadow: $material-shadow; */
  font: bold 12px/30px;
  min-height: 150px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  &__subtitle { 
    color: lighten(grey, 15%); 
  }
  &__empty {
    background-color: transparent; 
    box-shadow: none;
  }
  &:hover { cursor: pointer; }
}

.introPic {
  float: left;
  width: 150px;
  height: 150px;
}

.uni_container {
  max-width: 980px;
  margin: 20px auto;
  @media screen and (max-width: 1050px !important) { 
    width: 95%; 
  }
}

/* .active {
  background: green;
} */

.filterButton {
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
	width: 100%;
	height: 3.125rem;
	border: 0.125rem solid #14bf98;
	border-radius: 0.25rem;
	background-color: #14bf98;
	font: 500 1.5rem/1.75rem "Montserrat", sans-serif;
	cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;
}

.locFilter {
  overflow-x: visible;
  overflow-y: visible;
  z-index: 1;
  display: block;
  position:relative;
  margin-bottom: 1.5rem;
  
}

.lengthFilter {
  z-index: -2;
  overflow: hidden;
  position:relative;
  margin-bottom: 1.5rem;

}

#range {
  z-index: -10;
 
  position:relative; 
}

/* Services */
.cards-2 .card {
  width: 30%;
  display: inline-block;
  vertical-align: top;
}

.cards-2 .col-lg-12 div.card:nth-child(3n+2) {
  margin-right: 1.25rem;
  margin-left: 1.25rem;
}
/* end of services */

.cards-2 {
/* padding-top: 6.625rem;	
padding-bottom: 1.25rem;	 */
background-color: #fbfbfb;
}

.cards-2 .section-title {
/* margin-bottom: 0.5rem; */
text-align: center;
}

.cards-2 h2 {
text-align: center;
}

.cards-2 p {
text-align: center;
}

.cards-2 .card {
margin-bottom: 1.625rem;
border: none;
background-color: transparent;
}

.card-title{
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.cards-2 .card-body {
padding: 2.25rem 2rem 2.125rem 2rem;
border: 1px solid #ebe8e8;
border-bottom-left-radius: 0.375rem;
border-bottom-right-radius: 0.375rem;
background-color: #fff;
height: 28rem;
}

.cards-2 h3 {
text-align: center;
font-size: 1.5rem;
}


.cards-2 .list-unstyled .fas {
color: #14bf98;
font-size: 0.5rem;
line-height: 1.375rem;
}

.month {
color: #14bf98;
font: 700 1rem/1.5rem "Montserrat", sans-serif;
font-size: 1.5rem;
}


.cards-2 .col-lg-12 {
		text-align: center;
  }
  
.cards-2 .card-image img {
	border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  width: 150px;
  height: 150px;
  align-self: center;
}

.cards-2 .button-container {
	margin-top: -1.375rem;
  text-align: center;
  color: #fff !important;
}

.cards-2 .button-container:hover {
  background-color: transparent !important;
  color: #14bf98 !important;
  cursor: pointer !important;
}

.filterButton:hover {
	background-color: transparent;
  color: #14bf98;
}

.Row {
    display: table;
    width: 100%; /*Optional*/
    table-layout: fixed; /*Optional*/
    border-spacing: 10px; /*Optional*/
    font: 700 1.2rem/0 "Montserrat", sans-serif;
}
.Col {
    display: table-cell;
    text-align: center;
    padding: 13px 23px;
    color: white;
    height: 3.125rem;
    border: 0.125rem solid #eb9a31;
    border-radius: 0.25rem;
    background-color: #eb9a31;
    font: 500 1.5rem/1.75rem "Montserrat", sans-serif;
    cursor: pointer;
    transition: all 0.2s; 
}
.form-control{
  font-size: 1.5rem;
}
</style>