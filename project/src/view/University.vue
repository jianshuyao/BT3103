<template>
 <div v-cloak>
  <router-view></router-view>
  <div class="container">
    <div class="col-15">
      <div class="md-form">
          <input type="text" class="form-control" placeholder="Search Opportunities" v-model="filter">
        </div>
    </div>
    <br>
    <ul>
        <li v-for="university in getUniversities" v-bind:key="university.id">
          <div class="box"> 
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
        uniList: [],
        filter: '',
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
    getUniversities() {
      var universities = this.uniList.filter((university) => {
          return university.university.toLowerCase().includes(this.filter.toLowerCase());
        });
      return universities
      
    }
  }
}


</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: $material-shadow;
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

</style>