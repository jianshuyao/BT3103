<template>
<div>
  <!-- Team -->
      <div class="basic-2">
          <div class="container">

              <div class="row">
                  <div class="col-lg-12">
                      <h2>Who we are</h2>
                      <br>
                  </div> <!-- end of col -->
              </div> <!-- end of row -->

              <div class="row">
                  <div class="col-lg-12">

                      <!-- Team Member -->
                      <div class="team-member">
                          <div class="image-wrapper">
                              <img class="img-fluid" src="./images/DH.jpg" alt="alternative" >
                          </div> <!-- end of image-wrapper -->

                          <p class="p-large">Dong Han</p>
                          <p class="job-title">General Manager</p>
                      </div> <!-- end of team-member -->
                      <!-- end of team member -->

                      <div class="team-member">
                          <div class="image-wrapper">
                              <img class="img-fluid" src="./images/YD.jpg" alt="alternative" >
                          </div> <!-- end of image-wrapper -->
                          
                          <p class="p-large">Hu Yidi</p>
                          <p class="job-title">Business Analyst</p>
                      </div> <!-- end of team-member -->
                      <!-- end of team member -->

                      <div class="team-member">
                          <div class="image-wrapper">
                              <img class="img-fluid" src="./images/SY.jpg" alt="alternative" >
                          </div> <!-- end of image-wrapper -->
                          
                          <p class="p-large">Jian Shuyao</p>
                          <p class="job-title">Web Developer</p>
                      </div> <!-- end of team-member -->
                      <!-- end of team member -->

                      <div class="team-member">
                          <div class="image-wrapper">
                              <img class="img-fluid" src="./images/BX.jpg" alt="alternative" >
                          </div> <!-- end of image-wrapper -->
                          
                          <p class="p-large">Yang Bixuan</p>
                          <p class="job-title">Market Researcher</p>
                      </div> <!-- end of team-member -->
                      <!-- end of team member -->

                  </div> <!-- end of col -->
              </div> <!-- end of row -->

          </div> <!-- end of container -->
      </div> <!-- end of basic-2 -->
    

    
    <!-- Details 1 -->
	
  
  <div id="details" class="accordion">
		<div class="area-1"></div><!-- end of area-1 on same line and no space between comments to eliminate margin white space -->
    
    <div class="area-2">

            <!-- Accordion -->
            <div class="accordion-container" id="accordionOne">
                <h2>What we offer</h2>
                <div class="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span><span class="accordion-title">Powerful Search Function</span>
                        </span>
                    </div>
                </div> <!-- end of item -->
            
                <div class="item">
                    <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">Consolidated Program Information</span>
                        </span>
                    </div>
                    
                </div> <!-- end of item -->
            
                <div class="item">
                    <div id="headingThree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Efficient Information Gathering</span>
                        </span>
                    </div>
                </div> <!-- end of item -->

            </div> <!-- end of accordion-container -->
            <!-- end of accordion -->

		</div> <!-- end of area-2 -->
  </div> <!-- end of accordion -->
  <!-- end of details 1 -->


    <!-- Details 2 -->
	<div class="tabs">
      <div class="area-1">
            <div class="tabs-container" id="accordionOne">
                <h2>Why choose us</h2>
                <br>
                <div class="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span>
                            <span class="accordion-title">One-off platform for exchange planning</span>
                        </span>
                    </div>
                </div> <!-- end of item -->
            
                <div class="item">
                    <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">Hassle-free platform for all faculties</span>
                        </span>
                    </div>
                    
                </div> <!-- end of item -->
            
                <div class="item">
                    <div id="headingThree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Strategic searching based on needs</span>
                        </span>
                    </div>
                </div> <!-- end of item -->

            </div>
        </div><!-- end of area-1 on same line and no space between comments to eliminate margin white space -->
        
        <div class="area-2"></div> <!-- end of area-2 -->
    </div> <!-- end of tabs -->
    <!-- end of details 2 -->
  </div>
  <!-- end of team -->

  
</template>



<script>
export default {
  name: 'About' //this is the name of the component
}
</script>

<style scoped>
@import './css/styles.css'; 

img {
    width:540px; /* you can use % */
    height: auto;
}
</style>