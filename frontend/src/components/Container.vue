<template>
<div class="row" id="presentation">
  <div class="col-md-5 center profilePhotoSection"> <!-- col-md-4  -->
    <img class="profilePhoto" src="../assets/FotoPerfil.jpg" width="280" height="220">
  </div>
  <div class="col-md-7 center contentCenter"> <!-- col-md-8  -->
    <div class="contentCenterChild">
      <h1 class="center title">JOAQUÍN PARRILLA</h1>
      <hr>
      <h3 class="textDeveloper">SOFTWARE DEVELOPER</h3>
    </div>
    
  </div>
</div>
<div id="aboutMeSection">
  <br>
  <h2>Acerca de mí</h2>
  <p>{{ aboutMeData }}</p>
  <hr class="white">
  <h2>Tecnologías con las que trabajo:</h2><br>
  <img v-for="data in skillsData" v-bind:key="data" 
    v-bind:src="data.link" width="180" height="120" class="skillsPhotos">
  <!-- <ul v-for="data in skillsData" v-bind:key="data">
    <li>{{ data.link }}</li>
  </ul> -->
    
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Container',

  props: { },

  data: () => ({
    aboutMeData: null,
    skillsData: null,

  }),

  created() {
    console.log("%c¡Bienvenido/a a mi portafolio!", 
      "font: 3em Arial; color: #32fbe2; background-color: #1a0933;")

    axios.get("http://localhost:5000/api/getAboutMeData")
    .then(result => {
      // console.log(result.data)
      this.skillsData = result.data.skillsImages
      this.aboutMeData = result.data.aboutMe.paragraph
    })

  }

}
</script>

<style scoped>
.row > div {
  padding: 20px;
  /* border: grey  1px solid; */
}

.profilePhoto {
  /* border-radius: 50%; */
  /* margin-left: 50%; */
  width:300px;
  height:300px;
  border-radius:150px;
}

.skillsPhotos { 
  border-radius:150px;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 2px;
}

</style>
