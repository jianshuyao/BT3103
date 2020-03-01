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
  
    <el-col v-for="university in getUniversities" v-bind:key="university.name" :xs="24" :sm="12" :md="8">
      <div class="box"> 
        <div> {{ university.name }} </div>
        <div class="box__subtitle"> {{ university.country }} </div>
        <div class="box__subtitle"> {{ university.length }} Months </div>
        <router-link v-bind:to = "'/'+ university.link" exact>Go to University Page</router-link>
      </div>
    </el-col>

    <el-col v-if="getUniversities.length === 0" :xs="24" :sm="24" :md="24">
      <div class="box box__empty"> No Match Found</div>
    </el-col>

    
 </div> <!-- container -->
  
</div> <!-- #app -->

</template>



<script>
export default{
  name: 'University', 

  data() {
    return { 
      filter: '',
      options: [
        { label: 'Default', value: 'none' },
        { label: 'By Program Length', value: 'length' },
      ],
      universities: [
        { name: 'University of California, Santa Barbara', country: 'United States', length: 3, link:'University/UCSB'},
        { name: 'Peking University', country: 'China', length: 6, link:'University/PKU'},
        { name: 'Tokyo University', country: 'Japan', length: 5, link:'/tku.vue'},
        { name: 'Fudan University', country: 'China', length: 6, link:'/fdu.vue'},
        { name: 'Oxford University', country: 'United Kingdom', length: 4, link:'oxf.vue'},
        { name: 'Nanyang Technological University', country: 'Singapore', length: 4, link:'/ntu.vue'}
      ],
    };
  },

  computed: {
    getUniversities() {
      
      var universities = this.universities.filter((university) => {
          return university.name.toLowerCase().includes(this.filter.toLowerCase());
        });
      
      if (this.sort == 'views') {
        return universities.sort(function(a, b) {
          return b.length - a.length
        });
      } else {
        return universities;
      }
      
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

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

.search-wrapper {
  margin: 10px 0;
}

.col-space {
  content: '&nbsp;';
  @media screen and (max-width: 767px) { display: none; }
}

.container {
  max-width: 980px;
  margin: 20px auto;
  @media screen and (max-width: 1050px) { 
    width: 95%; 
  }
}

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

.el-select {
  width: 100%;
}
</style>