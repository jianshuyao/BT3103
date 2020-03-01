<template>

  <body>
      <div class="ucsb-container">
        <div class="home-content-wrap">
          <div class="w-layout-grid about-grid">
            <div id="w-node-76c147234d34-3e215c33">
              <div class="home-section-wrap">
                
                <h1 class="section-heading">The University of California, Santa Barbara</h1>
                <p class="paragraph-light">The University of California, Santa Barbara (UC Santa Barbara or UCSB) is a public research university in Santa Barbara, California. It is one of the 10 campuses of the University of California system. Tracing its roots back to 1891 as an independent teachers&#x27; college, UCSB joined the University of California system in 1944 and is the third-oldest general-education campus in the system.</p>
              </div>
              <div class="info-table table3">
              <a href="https://www.ucsb.edu/">
                <div>Learn More</div>
              </a>
              </div>
              <div class="university-image">
                <img src="./assets/ucsb.png" class="img-thumbnail" height="300" width="2000">
              </div>
            <!-- </div><img src="./assets/ucsb.png" srcset="images/ucsb-campus-storke-bike-circle-ucen-ocean-p-500.jpeg 500w, images/ucsb-campus-storke-bike-circle-ucen-ocean.jpg 549w" sizes="(max-width: 479px) 94vw, (max-width: 577px) 95vw, 549px" id="w-node-76c147234d3f-3e215c33" alt=""></div> -->
          </div>
        </div>
      </div>
    </div>
  

    <div class="ucsb-container">
      <div class="info-table table1">
        <div class="info-header">
          <div class="price"><span>Academics</span></div>
          
        </div>
        <ul class="info-list">
          <li><strong>Academic Calendar</strong></li>
            <p>The majority of UC campuses operate on the quarter system, while Berkeley
and Merced operate on a semester system. </p>
          <br>
          <div class="border"></div>
          <li><strong>Colleges Accepting Students</strong></li>
          <p> FASS, FoS, FoE, and SoC</p>
          <br>
          <div class="border"></div>
          <li><strong>Module Restriction</strong></li>
          <p>Some majors have restricted enrolment or are not open to Reciprocal Exchange
students. Before you choose your major, review the UC Undergraduate
Majors table and the Undergraduate Impacted Majors table. This information will
help you learn if your major is offered at a particular UC campus.</p>
          <br>
          <div class="border"></div>
          <li><strong>MC Exchange Ratio</strong></li>
          <p>15 Quarter units = 20 NUS MCs</p>
        </ul>
        <a href="#">Learn More</a>
      </div>

      <div class="info-table table2">
        <div class="info-header">
          <div class="price"><span>Life</span></div>
          
        </div>
        <ul class="info-list">
          <li><strong>Health/Medical
Insurance</strong></li>
            <p>All registered NUS students are covered under the university health
insurance and the blanket travel insurance. If the insurance coverage is not enough, students are advised to purchase
additional health and/or travel insurance from their preferred agent.</p>
          <br>
          <div class="border"></div>
          <li><strong>Cost of Living</strong></li>
            <p>Please refer to <a href= 'http://eap.ucop.edu/guides/reciprocity/Pages/default.aspx'>this page</a> (and click on ‘Money Matters’): </p>
            <br>
          <div class="border"></div>
          <li><strong>Weather</strong></li>
          <p>In Santa Barbara, the summers are warm, arid, and clear and the winters are cold, wet, and partly cloudy. Over the course of the year, the temperature typically varies from 42°F to 77°F and is rarely below 35°F or above 84°F.

</p>
        </ul>
        <a href="#">Learn More</a>
      </div>
    </div>
  </body>
</template>

<script>
export default{
  name: 'ucsb', 
}
</script>

<style>
  *{
  margin: 0;
  padding: 0;
  font-family: "Open Sans",sans-serif;
  text-decoration: none;
  list-style: none;
}

body{
  min-height: 100vh;
  background-image: linear-gradient(125deg,#f3f5f7,#e5ebe7);
}

.ucsb-container{
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
}

.info-table{
  background: #f1f1f1;
  flex: 1;
  margin: 10px;
  
}

.info-header{
  color: #fff;
  position: relative;
  margin-bottom: 20px;
}

.price{
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.price span{
  font-size: 30px;
}

.title{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,50%);
  width: 80%;
  max-width: 360px;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
}

.info-list{
  padding: 10px 20px;
}

.info-list li{
  margin: 8px 0;
  font-size: 14px;
  color: #344;
  text-align: center;
}

.border{
  width: 80px;
  height: 1px;
  background: #ddd;
  margin: auto;
}

.info-table a{
  display: block;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  border: 1px solid;
  max-width: 360px;
  transition: .2s linear;
}
.info-table a:hover{
  border-radius: 30px;
}
.table1 .info-header{
  background: #099453;
}
.table2 .info-header{
  background: #099453;
}
.table3 .info-header{
  background: #c0392b;
}

.table1 .title{
  background-image: linear-gradient(125deg,#3498db,#9b59b6);
}
.table2 .title{
  background-image: linear-gradient(125deg,#34495e,#95a5a6);
}
.table3 .title{
  background-image: linear-gradient(125deg,#e74c3c,#f39c12);
}

.table1 a{
  color: #099453;
}
.table2 a{
  color: #099453;
}
.table3 a{
  color: #099453;
}

.table1 a:hover{
  background: #0ba12b;
  color: #fff;
}
.table2 a:hover{
  background: #099453;
  color: #fff;
}
.table3 a:hover{
  background: #099453;
  color: #fff;
}

@media screen and (max-width:780px) {
  .info-table{
    flex: 100%;
  }
}


</style>