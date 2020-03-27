<template>

  <div>
    <div class="parallax1">
      <div class="home_container">
        <div class="home-title">
          <i class="fas fa-globe-americas"></i>
          Discovering the Globe
        </div>
        <div class="about">
          Explore new vistas on the Student Exchange Programme
        </div>
        <div class="centered">
          <router-link to='/University'>
            <button class="btn btn-success btn-middle">
              <i class="fas fa-plane" style="margin:0 10px 0 0;"></i>
              Search Programme
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class = "content">
        <h3 style="text-align:center;">Student Exchange Programme</h3>
        <p>
        The Student Exchange Programme (SEP) is the largest and most established global programme in NUS. Through the development and management of strategic and sustainable partnerships with universities globally, Global Relations Office (GRO) strives to ensure a quality exchange experience for all outgoing and incoming students. More than 90% of both outgoing and incoming students are highly satisfied with their SEP experience. More than 95% of our overseas SEP alumni would recommend NUS to their peers at their home universities, while almost all returned SEP exchangers would gladly participate in SEP again if given the chance.
        </p>

        <p>
        NUS students are able to choose from over 300 partner universities in more than 40 countries for their SEP experience. In AY 2017/18, approximately 2,000 NUS students embarked on SEP while close to 2,000 incoming students were received from our partner universities. We welcome students to participate in exchange to broaden their horizons and gain essential soft skills in preparation for the world after graduation.
        </p>
      </div>

      <div class="parallax2">
        <div class="home_container">
          <div class="home-title">
            <i class="fas fa-globe-asia"></i>
            Discovering the Globe
          </div>
          <div class="about">
            Explore new vistas on the Student Exchange Programme
          </div>
          <div class="centered">
            <router-link to='/University'>
              <button class="btn btn-danger btn-middle">
                <i class="fas fa-train" style="margin:0 10px 0 0;"></i>
                Search Programme
              </button>
            </router-link>
         </div>
      </div>
    </div>

  </div>

</template>

<script>
  
export default {
  name: 'Home' //this is the name of the component
}
</script>

<style>
/* Container holding the image and the text */

.parallax1  {
  position: relative;
  height: 600px;

  /* Create background image */
  background-image: url("./images/home_image.jpeg");
  
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax2 {
  position: relative;
  height: 600px;

  /* Create background image */
  background-image: url("./images/home_image2.jpg");

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax1 .home_container {
  text-align: center;
  color: white;
}

.parallax2 .home_container {
  text-align: center;
  color: black;
}

.parallax1 .home-title {
  margin: auto;
  position: absolute;
  font-size: 250%;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.parallax2 .home-title {
  margin: auto;
  position: absolute;
  font-size: 250%;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.parallax1 .about {
  margin: auto;
  text-align: center;
  position: absolute;
  font-size: 150%;
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.parallax2 .about {
  margin: auto;
  text-align: center;
  position: absolute;
  font-size: 150%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-middle {
  transition: .5s ease;
  opacity: 0.5;
  font-size: 150%;
  padding: 15px 42px;
}

.home_container:hover .btn-middle {
  opacity: 1;
}

.content {
  color: #777;
  background-color:white;
  text-align:center;
  padding:50px 80px;
  text-align: justify;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  }
  
.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

</style>