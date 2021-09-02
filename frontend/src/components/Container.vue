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
  <div class="cardContent skills">
    <div class="skill card border-info" v-for="(data, index) in skillsData" v-bind:key="index">
      <div class="contentCenter">
        <img class="skill_image" v-bind:src="data.link">
      </div>
      <div class="text_skill center">
        {{ data.name }}
      </div>
    </div>
  </div>

<!--   
  <img v-for="data in skillsData" v-bind:key="data" 
    v-bind:src="data.link" width="180" height="120" class="skillsPhotos"> -->
  <!-- <ul v-for="data in skillsData" v-bind:key="data">
    <li>{{ data.link }}</li>
  </ul> -->
  <!-- <v-gallery ></v-gallery> -->
  <!-- <v-gallery :images="skillsImages || []" :dark="true" :caption="true" ></v-gallery> -->
  <hr class="white" id="myProjectsSection">
</div>
</template>

<script>
import axios from 'axios'
// import vGallery from 'v-gallery'

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

    axios.get("https://joaquinparrilla.herokuapp.com/api/getAboutMeData")
    .then(result => {
      // console.log(result.data.skillsImages)
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

.skill {
  padding: 1em 1em  0.1em 1em;
}

.skill_image {
  align-items: center;
  max-width: 100%;
  width: auto;
  height: auto;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 2px;
}

.text_skill {
  margin: 0%;
  padding: 0%;
}

@media (max-width: 560px) {
  .skills {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (min-width: 561px) and (max-width: 767px) {
  .skills {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (min-width: 768px) and (max-width: 977px) {
  .skills {
    grid-template-columns: repeat(5, 1fr) !important;
  }
}

@media (min-width: 978px) {
  .skills {
    grid-template-columns: repeat(6, 1fr) !important;
  }
}

</style>
