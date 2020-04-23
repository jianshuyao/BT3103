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
          <p>Filtered Program Length: {{filterLength[0]}} ~ {{filterLength[1]}} Months</p>
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
                    <p>{{ university.location }}</p>
                    <span class="month">{{ university.semesterLength}} Months </span>
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
/* @import './css/styles.css'; */
$material-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);

[v-cloak] {
  display: none !important;
}

body {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #F3F5F7 !important;
  /* font-family: 'Open Sans', sans-serif; */
}

.box {
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* box-shadow: $material-shadow; */
  font: bold 12px/30px !important;
  min-height: 150px !important;
  border-radius: 5px !important;
  background-color: white !important;
  margin-bottom: 10px !important;
  &__subtitle { 
    color: lighten(grey, 15%) !important; 
  }
  &__empty {
    background-color: transparent !important; 
    box-shadow: none !important;
  }
  &:hover { cursor: pointer !important; }
}

.introPic {
  float: left !important;
  width: 150px !important;
  height: 150px !important;
}

.uni_container {
  max-width: 980px !important;
  margin: 20px auto !important;
  @media screen and (max-width: 1050px !important) { 
    width: 95% !important; 
  }
}

/* .active {
  background: green;
} */

.filterButton {
  padding: 13px 23px !important;
  color: white !important;
  text-align: center !important;
  text-decoration: none !important;
  display: inline-block !important;
	width: 100% !important;
	height: 3.125rem !important;
	border: 0.125rem solid #14bf98 !important;
	border-radius: 0.25rem !important;
	background-color: #14bf98 !important;
	font: 500 1rem/1.75rem "Montserrat", sans-serif !important;
	cursor: pointer !important;
	transition: all 0.2s !important;
}

.locFilter {
  overflow-x: visible !important;
  overflow-y: visible !important;
  z-index: 1 !important;
  display: block !important;
  position:relative !important;
  margin-bottom: 1.5rem !important;
  
}

.lengthFilter {
  z-index: -2 !important;
  overflow: hidden !important;
  position:relative !important;
  margin-bottom: 1.5rem !important;

}

#range {
  z-index: -10 !important;
 
  position:relative !important; 
}

/* Services */
.cards-2 .card {
  max-width: 18.25rem !important;
  display: inline-block !important;
  vertical-align: top !important;
}

.cards-2 .col-lg-12 div.card:nth-child(3n+2) {
  margin-right: 1.25rem !important;
  margin-left: 1.25rem !important;
}
/* end of services */

.cards-2 {
/* padding-top: 6.625rem;	
padding-bottom: 1.25rem;	 */
background-color: #fbfbfb !important;
}

.cards-2 .section-title {
/* margin-bottom: 0.5rem; */
text-align: center !important;
}

.cards-2 h2 {
text-align: center !important;
}

.cards-2 p {
text-align: center !important;
}

.cards-2 .card {
margin-bottom: 1.625rem !important;
border: none !important;
background-color: transparent !important;
}

.cards-2 .card-body {
padding: 2.25rem 2rem 2.125rem 2rem !important;
border: 1px solid #ebe8e8 !important;
border-bottom-left-radius: 0.375rem !important;
border-bottom-right-radius: 0.375rem !important;
background-color: #fff !important;
}

.cards-2 h3 {
text-align: center !important;
font-size: 1rem !important;
}


.cards-2 .list-unstyled .fas {
color: #14bf98 !important;
font-size: 0.5rem !important;
line-height: 1.375rem !important;
}

.month {
color: #14bf98 !important;
font: 700 1rem/1.5rem "Montserrat", sans-serif !important;
font-size: 1rem !important;
margin-left: 4.75rem !important;
}


.cards-2 .col-lg-12 {
		margin-left: 2rem !important;
  }
  
.cards-2 .card-image img {
	border-top-left-radius: 0.375rem !important;
  border-top-right-radius: 0.375rem !important;
  width: 150px !important;
  height: 150px !important;
  align-self: center !important;
  margin-left: 2.1rem !important;
}

.cards-2 .button-container {
	margin-top: -1.375rem !important;
	text-align: center !important;
}

.filterButton {

}

.filterButton:hover {
	background-color: transparent !important;
	color: #14bf98 !important;
}

.Row {
    display: table !important;
    width: 100% !important; /*Optional*/
    table-layout: fixed !important; /*Optional*/
    border-spacing: 10px !important; /*Optional*/
}
.Col {
    display: table-cell !important;
    text-align: center !important;
    padding: 13px 23px !important;
    color: white !important;
    height: 3.125rem !important;
    border: 0.125rem solid #eb9a31 !important;
    border-radius: 0.25rem !important;
    background-color: #eb9a31 !important;
    font: 500 1rem/1.75rem "Montserrat", sans-serif !important;
    cursor: pointer !important;
    transition: all 0.2s !important; 
}

/******************************/
/*     01. General Styles     */
/******************************/
body,
html {
  width: 100%  !important;
	height: 100% !important;
}

body, p {
	color: #787976 !important; 
	font: 400 1rem/1.5625rem "Open Sans", sans-serif !important;
}

.p-large {
	font: 400 1.125rem/1.625rem "Open Sans", sans-serif !important;
}

.p-small {
	font: 400 0.875rem/1.375rem "Open Sans", sans-serif !important;
}

.p-heading {
	margin-bottom: 3.5rem !important;
	text-align: center !important;
}

.li-space-lg li {
	margin-bottom: 0.375rem !important;
}

.indent {
	padding-left: 1.25rem !important;
}

h1 {
	color: #484a46 !important;
	font: 700 2.5rem/3rem "Montserrat", sans-serif !important;
}

h2 {
	color: #484a46 !important;
	font: 700 1.75rem/2.125rem "Montserrat", sans-serif !important;
}

h3 {
	color: #484a46 !important;
	font: 700 1.375rem/1.75rem "Montserrat", sans-serif !important;
}

h4 {
	color: #484a46 !important;
	font: 700 1.25rem/1.625rem "Montserrat", sans-serif !important;
}

h5 {
	color: #484a46 !important;
	font: 700 1.125rem/1.5rem "Montserrat", sans-serif !important;
}

h6 {
	color: #484a46 !important;
	font: 700 1rem/1.375rem "Montserrat", sans-serif !important;
}

a {
	color: #787976 !important;
	text-decoration: underline !important;
}

a:hover {
	color: #787976 !important;
	text-decoration: underline !important;
}

a.green {
	color: #14bf98 !important;
}

a.white,
.white {
	color: #dfe5ec !important;
}


strong {
	color: #484a46 !important;
}

.section-title {
	color: #14bf98 !important;
	font: 500 0.8125rem/1.125rem "Montserrat", sans-serif !important;
}

.btn-solid-reg {
	display: inline-block !important;
	padding: 1.1875rem 1.875rem 1.1875rem 1.875rem !important;
	border: 0.125rem solid #14bf98 !important;
	border-radius: 0.25rem !important;
	background-color: #14bf98 !important;
	color: #fff !important;
	font: 700 0.75rem/0 "Montserrat", sans-serif !important;
	text-decoration: none !important;
	transition: all 0.2s !important;
}

.btn-solid-reg:hover {
	background-color: transparent !important;
	color: #14bf98 !important;
	text-decoration: none !important;
}

.btn-solid-lg {
	display: inline-block !important;
	padding: 1.375rem 2.125rem 1.375rem 2.125rem !important;
	border: 0.125rem solid #14bf98 !important;
	border-radius: 0.25rem !important;
	background-color: #14bf98 !important;
	color: #fff !important;
	font: 700 0.75rem/0 "Montserrat", sans-serif !important;
	text-decoration: none !important;
	transition: all 0.2s !important;
}

.btn-solid-lg:hover {
	background-color: transparent !important;
	color: #14bf98 !important;
	text-decoration: none !important;
}

.btn-outline-reg {
	display: inline-block !important;
	padding: 1.1875rem 1.875rem 1.1875rem 1.875rem !important;
	border: 0.125rem solid #787976 !important;
	border-radius: 0.25rem !important;
	background-color: transparent !important;
	color: #787976 !important;
	font: 700 0.75rem/0 "Montserrat", sans-serif !important;
	text-decoration: none !important;
	transition: all 0.2s !important;
}

.btn-outline-reg:hover {
	background-color: #787976 !important;
	color: #fff !important;
	text-decoration: none !important;
}

.btn-outline-lg {
	display: inline-block !important;
	padding: 1.375rem 2.125rem 1.375rem 2.125rem !important;
	border: 0.125rem solid #787976 !important;
	border-radius: 0.25rem !important;
	background-color: transparent !important;
	color: #787976 !important;
	font: 700 0.75rem/0 "Montserrat", sans-serif !important;
	text-decoration: none !important;
	transition: all 0.2s !important;
}

.btn-outline-lg:hover {
	background-color: #787976 !important;
	color: #fff !important;
	text-decoration: none !important;
}

.btn-outline-sm {
	display: inline-block !important;
	padding: 1rem 1.625rem 0.9375rem 1.625rem !important;
	border: 0.125rem solid #787976 !important;
	border-radius: 0.25rem !important;
	background-color: transparent !important;
	color: #787976 !important;
	font: 700 0.75rem/0 "Montserrat", sans-serif !important;
	text-decoration: none !important;
	transition: all 0.2s !important;
}

.btn-outline-sm:hover {
	background-color: #787976 !important;
	color: #fff !important;
	text-decoration: none !important;
}

.form-group {
	position: relative !important;
	margin-bottom: 1.25rem !important;
}

.form-group.has-error.has-danger {
	margin-bottom: 0.625rem !important;
}

.form-group.has-error.has-danger .help-block.with-errors ul {
	margin-top: 0.375rem !important;
}

.label-control {
	position: absolute !important;
	top: 0.8125rem !important;
	left: 1.375rem !important;
	color: #787976 !important;
	opacity: 1 !important;
	font: 400 0.875rem/1.375rem "Open Sans", sans-serif !important;
	cursor: text !important;
	transition: all 0.2s ease !important;
}

/* IE10+ hack to solve lower label text position compared to the rest of the browsers */
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
	.label-control {
		top: 0.9375rem !important;
	}
}

.form-control-input:focus + .label-control,
.form-control-input.notEmpty + .label-control,
.form-control-textarea:focus + .label-control,
.form-control-textarea.notEmpty + .label-control {
	top: 0.125rem !important;
	opacity: 1 !important;
	font-size: 0.75rem !important;
	font-weight: 500 !important;
}

.form-control-input,
.form-control-select {
	display: block !important; /* needed for proper display of the label in Firefox, IE, Edge */
	width: 100% !important;
	padding-top: 1.25rem !important;
	padding-bottom: 0.25rem !important;
	padding-left: 1.3125rem !important;
	border: 1px solid #dadada !important;
	border-radius: 0.25rem !important;
	background-color: #fff !important;
	color: #787976 !important;
	font: 400 0.875rem/1.375rem "Open Sans", sans-serif !important;
	transition: all 0.2s !important;
	-webkit-appearance: none !important; /* removes inner shadow on form inputs on ios safari */
}

.form-control-select {
	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important;
	height: 3rem !important;
}

/* IE10+ hack to solve lower label text position compared to the rest of the browsers */
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
	.form-control-input {
		padding-top: 1.25rem !important;
		padding-bottom: 0.75rem !important;
		line-height: 1.75rem !important;
	}

	.form-control-select {
		padding-top: 0.875rem !important;
		padding-bottom: 0.75rem !important;
		height: 3.125rem !important;
		line-height: 2.125rem !important;
	}
}

select {
    /* you should keep these first rules in place to maintain cross-browser behavior */
    -webkit-appearance: none !important;
	-moz-appearance: none !important;
	-ms-appearance: none !important;
    -o-appearance: none !important;
    appearance: none !important;
    background-position: 96% 50% !important;
    background-repeat: no-repeat !important;
    outline: none !important;
}

select::-ms-expand {
    display: none !important; /* removes the ugly default down arrow on select form field in IE11 */
}

.form-control-textarea {
	display: block !important; /* used to eliminate a bottom gap difference between Chrome and IE/FF */
	width: 100% !important;
	height: 8rem !important; /* used instead of html rows to normalize height between Chrome and IE/FF */
	padding-top: 1.25rem !important;
	padding-left: 1.3125rem !important;
	border: 1px solid #dadada !important;
	border-radius: 0.25rem !important;
	background-color: #fff !important;
	color: #787976 !important;
	font: 400 1rem/1.5625rem "Open Sans", sans-serif !important;
	transition: all 0.2s !important;
}

.form-control-input:focus,
.form-control-select:focus,
.form-control-textarea:focus {
	border: 1px solid #a1a1a1 !important;
	outline: none !important; /* Removes blue border on focus */
}

.form-control-input:hover,
.form-control-select:hover,
.form-control-textarea:hover {
	border: 1px solid #a1a1a1 !important;
}

.checkbox {
	font: 400 0.875rem/1.375rem "Open Sans", sans-serif !important;
}

input[type='checkbox'] {
	vertical-align: -15% !important;
	margin-right: 0.375rem !important;
}

/* IE10+ hack to raise checkbox field position compared to the rest of the browsers */
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
	input[type='checkbox'] {
		vertical-align: -9% !important;
	}
}

.form-control-submit-button {
	display: inline-block !important;
	width: 100% !important;
	height: 3.125rem !important;
	border: 0.125rem solid #14bf98 !important;
	border-radius: 0.25rem !important;
	background-color: #14bf98 !important;
	color: #fff !important;
	font: 700 0.75rem/1.75rem "Montserrat", sans-serif !important;
	cursor: pointer !important;
	transition: all 0.2s !important;
}

.form-control-submit-button:hover {
	background-color: transparent !important;
	color: #14bf98 !important;
}

/* Form Success And Error Message Formatting */
#lmsgSubmit.h3.text-center.tada.animated,
#cmsgSubmit.h3.text-center.tada.animated,
#pmsgSubmit.h3.text-center.tada.animated,
#lmsgSubmit.h3.text-center,
#cmsgSubmit.h3.text-center,
#pmsgSubmit.h3.text-center {
	display: block !important;
	margin-bottom: 0 !important;
	color: #b93636 !important;
	font: 400 1.125rem/1rem "Open Sans", sans-serif !important;
}

.help-block.with-errors .list-unstyled {
	color: #787976 !important;
	font-size: 0.75rem !important;
	line-height: 1.125rem !important;
	text-align: left !important;
}

.help-block.with-errors ul {
	margin-bottom: 0 !important;
}
/* end of form success and error message formatting */

/* Form Success And Error Message Animation - Animate.css */
@-webkit-keyframes tada {
	from {
		-webkit-transform: scale3d(1, 1, 1) !important;
		-ms-transform: scale3d(1, 1, 1) !important;
		transform: scale3d(1, 1, 1) !important;
	}
	10%, 20% {
		-webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
		-ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
		transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
	}
	30%, 50%, 70%, 90% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
		-ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
	}
	40%, 60%, 80% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
		-ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
	}
	to {
		-webkit-transform: scale3d(1, 1, 1) !important;
		-ms-transform: scale3d(1, 1, 1) !important;
		transform: scale3d(1, 1, 1) !important;
	}
}

@keyframes tada {
	from {
		-webkit-transform: scale3d(1, 1, 1) !important;
		-ms-transform: scale3d(1, 1, 1) !important;
		transform: scale3d(1, 1, 1) !important;
	}
	10%, 20% {
		-webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
		-ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
		transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg) !important;
	}
	30%, 50%, 70%, 90% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
		-ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg) !important;
	}
	40%, 60%, 80% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
		-ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg) !important;
	}
	to {
		-webkit-transform: scale3d(1, 1, 1) !important;
		-ms-transform: scale3d(1, 1, 1) !important;
		transform: scale3d(1, 1, 1) !important;
	}
}

.tada {
	-webkit-animation-name: tada !important;
	animation-name: tada !important;
}

.animated {
	-webkit-animation-duration: 1s !important;
	animation-duration: 1s !important;
	-webkit-animation-fill-mode: both !important;
	animation-fill-mode: both !important;
}
/* end of form success and error message animation - Animate.css */

/* Fade-move Animation For Lightbox - Magnific Popup */
/* at start */
.my-mfp-slide-bottom .zoom-anim-dialog {
	opacity: 0 !important;
	transition: all 0.2s ease-out !important;
	-webkit-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg) !important;
	-ms-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg) !important;
	transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg) !important;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
	opacity: 1 !important;
	-webkit-transform: translateY(0) perspective(37.5rem) rotateX(0) !important; 
	-ms-transform: translateY(0) perspective(37.5rem) rotateX(0) !important; 
	transform: translateY(0) perspective(37.5rem) rotateX(0) !important; 
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
	opacity: 0 !important;
	-webkit-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg) !important; 
	-ms-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg) !important; 
	transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg) !important; 
}

/* dark overlay, start state */
.my-mfp-slide-bottom.mfp-bg {
	opacity: 0 !important;
	transition: opacity 0.2s ease-out !important;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready.mfp-bg {
	opacity: 0.8 !important;
}
/* animate out */
.my-mfp-slide-bottom.mfp-removing.mfp-bg {
	opacity: 0 !important;
}
/* end of fade-move animation for lightbox - magnific popup */

/* Fade Animation For Image Slider - Magnific Popup */
@-webkit-keyframes fadeIn {
	from {
		opacity: 0 !important;
	}
	to {
		opacity: 1 !important;
	}
}

@keyframes fadeIn {
	from {
		opacity: 0 !important;
	}
	to {
		opacity: 1 !important;
	}
}

.fadeIn {
	-webkit-animation: fadeIn 0.6s !important;
	animation: fadeIn 0.6s !important;
}

@-webkit-keyframes fadeOut {
	from {
		opacity: 1 !important;
	}
	to {
		opacity: 0 !important;
	}
}

@keyframes fadeOut {
	from {
		opacity: 1 !important;
	}
	to {
		opacity: 0 !important;
	}
}

.fadeOut {
	-webkit-animation: fadeOut 0.8s !important;
	animation: fadeOut 0.8s !important;
}
/* end of fade animation for image slider - magnific popup */


/*************************/
/*     08. Details 1     */
/*************************/
.accordion .area-1 {
	height: 20rem !important;
	/* background: url('../images/details-1-background.jpg') center center no-repeat !important; */
	background-size: cover !important;
	border-top-right-radius: 50% !important;
	border-bottom-right-radius: 50% !important;  
}

.accordion .accordion-container {
	max-width: 90% !important;
	margin-right: auto !important;
	margin-left: auto !important;
	padding-top: 6.375rem !important;
	padding-bottom: 1.5rem !important;
}

.accordion h2 {
	margin-bottom: 1.625rem !important;
}

.tabs .item ,
.accordion .item {
	margin-bottom: 2rem !important;
}

.accordion h4 {
	margin-bottom: 0 !important;
}

.tabs span[aria-expanded="true"] .circle-numbering,
.tabs span[aria-expanded="false"] .circle-numbering,
.accordion span[aria-expanded="true"] .circle-numbering,
.accordion span[aria-expanded="false"] .circle-numbering {
	display: inline-block !important;
	width: 2.25rem !important;
	height: 2.25rem !important;
	margin-right: 0.875rem !important;
	border: 0.125rem solid #14bf98 !important;
	border-radius: 50% !important;
	background-color: #14bf98 !important;
	color: #fff !important;
	font: 700 1rem/2.125rem "Montserrat", sans-serif !important;
	text-align: center !important;
	vertical-align: middle !important;
	cursor: pointer !important;
	transition: all 0.2s ease !important;
}

.tabs .accordion-title,
.accordion .accordion-title {
	display: inline-block !important;
	width: 70% !important;
	margin-top: 0.125rem !important;
	margin-bottom: 0.25rem !important;
	font: 700 1.25rem/1.75rem "Montserrat", sans-serif !important;
	vertical-align: middle !important;
	cursor: pointer !important;
	transition: all 0.2s ease !important;
}


.accordion .accordion-body {
	margin-left: 3.125rem !important;
}


/*************************/
/*     09. Details 2     */
/*************************/
.tabs .tabs-container {
	max-width: 90% !important;
	margin-right: auto !important;
	margin-left: auto !important;
	padding-top: 2rem !important;
	padding-bottom: 5.75rem !important;
}


.tabs .area-2 {
	height: 27rem !important;
	/* background: url('../images/details-2-background.jpg') center center no-repeat !important; */
	background-size: cover !important;
	max-width: 90% !important;
	margin-right: auto !important;
	margin-left: auto !important;
	padding-top: 6.375rem !important;
	padding-bottom: 1.5rem !important;
	border-top-left-radius: 50% !important;
	border-bottom-left-radius: 50% !important;
}


/********************/
/*     14. Team     */
/********************/
.basic-2 {
	padding-top: 3.375rem !important;
	padding-bottom: 3.375rem !important;
	background-color: white !important;
	text-align: center !important;
}

.basic-2 h2 {
	margin-bottom: 0.75rem !important;
}


/* Hover Animation */
.basic-2 .image-wrapper {
	overflow: hidden !important;
	margin-bottom: 1.5rem !important;
}

.basic-2 .image-wrapper img {
	margin: 0 !important;
	transition: all 0.3s !important;
	border-radius: 50% !important;
}

.basic-2 .image-wrapper:hover img {
	-moz-transform: scale(1.15) !important;
	-webkit-transform: scale(1.15) !important;
	transform: scale(1.15) !important;
} 
/* end of hover animation */



.basic-2 .fa-stack {
	width: 1.75rem !important;
	height: 1.75rem !important;
	margin-right: 0.125rem !important;
	margin-left: 0.125rem !important;
}

.basic-2 .fa-stack .hexagon {
	position: absolute !important;
	left: 0 !important;
	width: 1.75rem !important;
	height: 1.75rem !important;
	background: center center no-repeat !important;
	background-size: 1.75rem 1.75rem !important;
	transition: all 0.2s ease !important;
}

.basic-2 .fa-stack:hover .hexagon {
	background: center center no-repeat !important;
	background-size: 1.75rem 1.75rem !important;
}

.basic-2 .fa-stack-1x {
	font-size: 0.6875rem !important;
	line-height: 1.75rem !important;
	color: #fff !important;
	transition: all 0.2s ease !important;
}

.basic-2 .fa-stack:hover .fa-stack-1x {
	color: #14bf98 !important;
}


/***********************/
/*     16. Contact     */
/***********************/
.form-2 {
	padding-top: 6.625rem !important;
	padding-bottom: 5.625rem !important;
	background-color: #fbfbfb !important;
}

.form-2 .text-container {
	margin-bottom: 3rem !important;
}

.form-2 .section-title {
	margin-bottom: 0.5rem !important;
 }

.form-2 h2 {
	margin-bottom: 1.375rem !important;
}

.form-2 .list-unstyled {
	margin-bottom: 2.25rem !important;
	font-size: 1rem !important;
	line-height: 1.625rem !important;
}

.form-2 .list-unstyled .fas,
.form-2 .list-unstyled .fab {
	margin-right: 0.5rem !important;
	font-size: 0.875rem !important;
	color: #14bf98 !important;
}

.form-2 .list-unstyled .fa-phone {
	vertical-align: 3% !important;
}

.form-2 h3 {
	margin-bottom: 1rem !important;
}

.form-2 .fa-stack {
	margin-right: 0.25rem !important;
	margin-bottom: 0.75rem !important;
	margin-left: 0.125rem !important;
	width: 3.25rem !important;
	height: 3.25rem !important;
}

.form-2 .fa-stack .hexagon {
	position: absolute !important;
	width: 3.25rem !important;
	height: 3.25rem !important;
	background:  center center no-repeat !important;
	background-size: 3.25rem 3.25rem !important;
	transition: all 0.2s ease !important;
}

.form-2 .fa-stack:hover .hexagon {
	background:  center center no-repeat !important;
	background-size: 3.25rem 3.25rem !important;
}

.form-2 .fa-stack-1x {
	font-size: 1.5rem !important;
	line-height: 3.25rem !important;
	color: #fff !important;
	transition: all 0.2s ease !important;
}

.form-2 .fa-stack:hover .fa-stack-1x {
	color: #14bf98 !important;
}


.ex-basic-2 .text-container {
	margin-bottom: 3.625rem !important;
}

.ex-basic-2 .text-container.last {
	margin-bottom: 0 !important;
}

.ex-basic-2 .list-unstyled .fas {
	color: #14bf98 !important;
	font-size: 0.5rem !important;
	line-height: 1.375rem !important;
}

.ex-basic-2 .list-unstyled .media-body {
	margin-left: 0.625rem !important;
}

.ex-basic-2 .form-container {
	margin-top: 2.5rem !important;
}

.ex-basic-2 .btn-outline-reg {
	margin-top: 1.75rem !important;
}


/*****************************/
/*     21. Media Queries     */
/*****************************/	
/* Min-width width 768px */
@media (min-width: 768px) {
	
	/* General Styles */
	.p-heading {
		width: 85% !important;
		margin-right: auto !important;
		margin-left: auto !important;
	}
	/* end of general styles */


	/* Details 1 */
	.accordion .accordion-container {
		max-width: 70% !important;
	}
	/* end of details 1 */


	/* Details 2 */
	.tabs .tabs-container {
		max-width: 70% !important;
	}

	.tabs #tab-2 .list-unstyled {
		display: inline-block !important;
		width: 45% !important;
		margin-top: 0 !important;
	}
	
	.tabs #tab-2 .list-unstyled.first {
		margin-right: 2rem !important;
	}
	/* end of details 2 */


	/* Contact */
	.form-2 .list-unstyled li {
		display: inline-block !important;
		margin-right: 1rem !important;
	}

	.form-2 .list-unstyled .address {
		display: block !important;
	}
	/* end of contact */
}
/* end of min-width width 768px */


/* Min-width width 992px */
@media (min-width: 992px) {
	
	/* General Styles */
	.p-heading {
		width: 65% !important;
	}
	/* end of general styles */

	/* Details 1 */
	.accordion {
		height: 30rem !important;
	}
	
	.accordion .area-1 {
		width: 50% !important;
		height: 100% !important;
		display: inline-block !important;
	}
	
	.accordion .area-2 {
		width: 50% !important;
		height: 100% !important;
		display: inline-block !important;
		vertical-align: top !important;
	}
	
	.accordion .accordion-container {
		max-width: 88% !important;
		margin-left: 2rem !important;
		padding-bottom: 0 !important;
	}

	.tabs .accordion-title,
	.accordion .accordion-title {
		width: 85% !important;
	}
	/* end of details 1 */


	/* Details 2 */
	.tabs {
		height: 30rem !important;
	}

	.tabs .area-1 {
		width: 50% !important;
		height: 100% !important;
		display: inline-block !important;
		vertical-align: top !important;
	}

	.tabs .area-2 {
		width: 50% !important;
		height: 100% !important;
		display: inline-block !important;
	}

	.tabs .tabs-container {
		max-width: 88% !important;
		margin-left: 2rem !important;
		padding-top: 6.75rem !important;
		padding-bottom: 0 !important;
	}

	.tabs .nav-tabs {
		justify-content: flex-start !important;
	}
	/* end of details 2 */



	/* Contact */
	.form-2 {
		padding-top: 6.875rem !important;
	}

	.form-2 .text-container {
		margin-bottom: 0 !important;
	}
	/* end of contact */
}
/* end of min-width width 992px */


/* Min-width width 1200px */
@media (min-width: 1200px) {
	
	/* General Styles */
	.p-heading {
		width: 55% !important;
	}
	/* end of general styles */


	/* Details 1 */
	.accordion .accordion-container {
		max-width: 28rem !important;
		margin-left: 5rem !important;
	}
	/* end of details 1 */


	/* Details 2 */
	.tabs .tabs-container {
		max-width: 28rem !important;
		margin-right: 5rem !important;
		margin-left: auto !important;
	}

	.tabs #tab-2 .media-wrapper.first {
		margin-right: 2rem !important;
	}
	/* end of details 2 */


	/* Contact */
	.form-2 .text-container {
		margin-top: 0.875rem !important;
		margin-right: 1.5rem !important;
	}

	.form-2 form {
		margin-left: 1.5rem !important;
	}
	/* end of contact */
}
/* end of min-width width 1200px */









</style>