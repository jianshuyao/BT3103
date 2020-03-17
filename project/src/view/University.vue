<template>
 <div v-cloak>
  <router-view></router-view>
  <div class="uni_container">
    
    <button v-on:click="hideFilter = !hideFilter"> 
      <i class="fas fa-filter">Apply Filters</i> 
    </button>
    <div v-if="!hideFilter">
      <button v-on:click="hideLocationFilter = !hideLocationFilter"><i class="fas fa-map">Location Filter</i></button>
      <div v-if="!hideLocationFilter">
        <input type="text" placeholder="Filter Location" v-model="filterLocation">
      </div>
      <button v-on:click="hideLengthFilter = !hideLengthFilter"><i class="fas fa-calendar-alt">Program Length Filter</i></button>
      <div v-if="!hideLengthFilter">
        <v-range-slider style="margin: 35px 20px 0px 20px"
                        :max="12"
                        :min="0"
                        :step="1"
                        thumb-label="always"
                        hint="Month(s)"
                        persistent-hint>
        </v-range-slider>
      </div>
      
    </div>
   
   
    
    <div class="col-15">
      <div class="md-form">
          <input type="text" class="form-control" placeholder="Search Opportunities" v-model="searchbox">
        </div>
    </div>
    

   
    <br>
    <ul>
        <li v-for="university in getUniversities" v-bind:key="university.id">
          <div class="box"> 
            <img class = "introPic" :src="university.introPic" alt="Program Picture">
            <div> {{ university.university }} </div>
            <div class="box__subtitle"> {{ university.location }} </div>
            <div class="box__subtitle"> {{ university.semesterLength}} Months </div>
            <router-link v-bind:to = "'/'+ university.link" exact>Go to University Page</router-link>
          </div>
        </li>

        <div v-if="getUniversities.length === 0" >
            <div class="box box__empty"> No Match Found</div>
        </div>

    </ul>
    
  </div>
</div>
</template>



<script>
import database from '../firebase.js';
export default {
  data(){
    return{
        hideFilter: true,
        hideLocationFilter: true,
        hideLengthFilter: true,
        uniList: [],
        searchbox: '',
        filterLocation: '',
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
  },
  //Lifecycle hook
  created(){
      this.fetchUniversities()
  },

  computed: {
    // getUniversities() {
    //   var universities = this.uniList.filter((university) => {
    //       return university.university.toLowerCase().includes(this.searchbox.toLowerCase());
    //     });

    //   if (this.filterLocation != "") {
    //     var uniLoc = universities.filter((university) => {
    //       return university.location.toLowerCase().includes(this.filterLocation.toLowerCase());
    //     });
    //     return uniLoc;

    //   } else {
    //     return universities;
    //   }     
    // }

    getUniversities() {
      var universities = this.uniList.filter((university) => {
          return university.university.toLowerCase().includes(this.searchbox.toLowerCase());
        });

      if (this.filterLocation != "") {
        var uniLoc = universities.filter((university) => {
          return university.location.toLowerCase().includes(this.filterLocation.toLowerCase());
        });
        return uniLoc;

      } else {
        return universities;
      }     
    }
    
 },
}


</script>

<style>
@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");

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

</style>