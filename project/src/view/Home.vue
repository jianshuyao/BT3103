<template>
  <div>
    <div class="container">
      <img src="../assets/home_image.jpeg" class="image" style="width:100%;">
      <div class="title">
        <i class="fa fa-globe"></i>
        Exploring the Globe  
      </div>
      <div class="about">
        Explore new vistas on the Student Exchange Programme
      </div>
      <div class="centered">
        <router-link to='/University'>
          <button class="btn btn-success btn-middle">
            <i class="fa fa-paper-plane"></i>
            Search Program
          </button>
        </router-link>
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
.container {
  position: relative;
  text-align: center;
  color: white;
}

.title {
  margin: auto;
  position: absolute;
  font-size: 250%;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about {
  margin: auto;
  text-align: center;
  position: absolute;
  font-size: 130%;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-middle {
  transition: .5s ease;
  opacity: 0.5;
  font-size: 150%;
  padding: 15px 42px;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .title {
  color:black
}

.container:hover .about {
  color:black
}

.container:hover .btn-middle {
  opacity: 1;
}

.image {
  opacity: 1;
  display: block;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
}

.centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>