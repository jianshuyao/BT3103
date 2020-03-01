<template>

  <body>
      <div class="ucsb-container">
        <div class="home-content-wrap">
          <div class="w-layout-grid about-grid">
            <div id="w-node-76c147234d34-3e215c33">
              <div class="home-section-wrap">
                
                <h1 class="section-heading">Peking University</h1>
                <br>
                <p class="paragraph-light">Peking University (PKU), is a major Chinese research university located in
Beijing and a member of the C9 League. It is the first modern national
university established in China, founded as the "Imperial University of
Peking" in 1898 as a replacement of the ancient Taixue or Guozijian, or
Imperial Academy. It also served as the highest administration for
education in China at the beginning of its founding. By 1920, it had become
a center for progressive thought.
Peking University is consistently ranked as one of the top higher learning
institution in mainland China. In addition to academics, Peking University is
especially renowned for its campus grounds and the beauty of its traditional
Chinese architecture.
</p>
              </div>
              <br>
              <div class="info-table table3">
              <a href="https://www.pku.edu.cn/">
                <div>Learn More</div>
              </a>
              </div>
              <br>
              <div class="university-image">
                <img src="./assets/pku.jpg" class="img-thumbnail" height="300" width="2000">
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
               <p>Semester 1: September to January</p>
               <p>Semester 2: February to July</p>

          <br>
          <div class="border"></div>
          <li><strong>Colleges Accepting Students</strong></li>
          <p><center> BIZ, FASS, FoS, FoE, FoL, SoC, SDE, USP</center></p>
          <br>
          <div class="border"></div>
          <li><strong>Module Restriction</strong></li>
          <p>Most courses offered at Peking University are taught in Chinese. English
courses are highlighted in the remarks column in the course information
website. Modules may change, the school/department reserves the right to
enrol a student to certain course. The course information of the next
semester will be published at the course information website at the end of
the previous semester. </p>
           <br>
           <p>Courses from the following faculties/programmes are not open to exchange
students:</p>
            <ul>
                <li>Health Science Centre </li>
                <li>Faculty with special pre-requisites</li>
                <li>Tailor-made programmes</li>
                <li>Shenzhen Graduate School</li>
            </ul>
          <br>
          <div class="border"></div>
          <li><strong>MC Exchange Ratio</strong></li>
          <p><center>15 Credits</center></p>
        </ul>
        <!-- <a href="#">Learn More</a> -->
      </div>

      <div class="info-table table2">
        <div class="info-header">
          <div class="price"><span>Life</span></div>
          
        </div>
        <ul class="info-list">
          <li><strong>Health/Medical
Insurance</strong></li>
            <p>All NUS matriculated students are covered under the NUS Travel Insurance
Policy for personal accident and medical expenses incurred by NUS students
on NUS approved overseas trips. If the coverage is not comprehensive,
students are welcome to purchase their additional travel insurance. </p>
          <br>
          <p>The Chinese Ministry of Education requires that all international students
be medically insured throughout their study in China. This policy is crucial to
the health, wellness and success of international students. Students who
study at Peking University for more than one semester are required to
purchase the University’s recommended medical insurance on the day of
registration. Students who study at Peking University for one semester
could choose to buy overseas medical insurance, which must cover China
and with offices in mainland China, and submit relevant insurance proof
(the insurance company’s contact in China included) on the day of
registration. Please note that students without valid medical insurance are
not allowed to register.</p>
            <br>
          <div class="border"></div>
          <li><strong>Cost of Living</strong></li>
            <p><center>Please refer to <a href= 'http://www.isd.pku.edu.cn/index.php?m=content&c=index&a=show&catid=70&id=569'>this page</a></center></p>
            <br>
          <div class="border"></div>
          <li><strong>Weather</strong></li>
          <p>July is the hottest month in Beijing with an average temperature of 27°C (81°F) and the coldest is January at -4°C (25°F) with the most daily sunshine hours at 12 in June. The wettest month is August with an average of 182mm of rain.

</p>
        </ul>
       <!-- <a href="#">Learn More</a> -->
      </div>
    </div>

    <div class="info-table table3">
        <router-link to="/University">Go Back to Programme list</router-link>
    </div>
  </body>
</template>

<script>
export default{
  name: 'pku', 
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