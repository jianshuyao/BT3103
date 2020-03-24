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
      <i class="fas fa-filter">Apply Filters</i> 
    </button>
    <div v-if="!hideFilter">
      
      <!-- location filter -->
      <div class='locFilter'>
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
                      <span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <br>
        </div>
      </div>

      <!-- length filter -->
      <div class='lenthFilter'>
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
          <p>Filtered Program Length: {{filterLength[0]}} ~ {{filterLength[1]}} Months</p>
        <br>

        </div>
      </div>
      
    </div>


    <br>
    <ul>
      <div>

        <li @click="goToUniLink(university)" 
            v-for="university in getUniversities" v-bind:key="university.id"
            >

        <!-- https://stackoverflow.com/questions/54863355/vuejs-apply-loop-in-css-to-put-hover -->
        <div @mouseover="university.hover=true"
             @mouseleave="university.hover=false"
             :style="{background: university.hover? university.background_hover : university.background}">
          
          <div class="box"> 
            <img class = "introPic" :src="university.introPic" alt="Program Picture">
            <div> {{ university.university }} </div>
            <div class="box__subtitle"> {{ university.location }} </div>
            <div class="box__subtitle"> {{ university.semesterLength}} Months </div>
            {{university.background_hover}}
            <!-- <router-link v-bind:to = "'/'+ university.link" exact >Go to University Page</router-link> -->
          </div>
        </div>
        </li>

        <div v-if="getUniversities.length === 0" >
            <div class="box box__empty"> No Match Found</div>
        </div>

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

$material-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);

[v-cloak] {
  display: none;
}

body {
  margin: 0;
  padding: 0;
  background-color: #F3F5F7;
  font-family: 'Open Sans', sans-serif;
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
    background-color: transparent; box-shadow: none 
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
  @media screen and (max-width: 1050px) { 
    width: 95%; 
  }
}

/* .active {
  background: green;
} */

.filterButton {
  background-color: #4CAF50;
  border: 3px;
  padding: 13px 23px;
  color: white;
  text-align: center;
  text-decoration: none;
  
  font-size: 17px;
}

.locFilter {
  overflow-x: visible !important;
  overflow-y: visible !important;
  z-index: 1;
  display: block;
  position:relative;
  
}

.lengthFilter {
  z-index: -2;
  overflow: hidden;
  position:relative;

}

#range {
  z-index: -10;
 
  position:relative;
}


</style>