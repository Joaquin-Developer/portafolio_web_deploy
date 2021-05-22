<template>
<div class="row">
  <div class="col-md-5 center profilePhotoSection"> <!-- col-md-4  -->
    <img class="profilePhoto" src="../assets/FotoPerfil.jpg" width="280" height="220">
    <!-- <hr class="verticalHr"> -->
  </div>
  <div class="col-md-7 center contentCenter"> <!-- col-md-8  -->
    <div class="contentCenterChild">
      <h1 class="center title">JOAQUÍN PARRILLA</h1>
      <hr>
      <h3 class="textDeveloper">SOFTWARE DEVELOPER</h3>
    </div>
    
  </div>
</div>
<div>
  <br>
  <h2>Acerca de mí</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque nihil magnam similique libero veniam ipsa quam laborum sequi tenetur minus ex quo, voluptates eum consequatur ad aliquid ipsam natus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda cum quo quia explicabo blanditiis dolorum aperiam. Debitis, qui reiciendis ad deleniti cum laboriosam magni consectetur. Veritatis saepe animi consequuntur.
  </p>
</div>

</template>

<script>
export default {
  name: 'Container',
  props: {
    
  },
  data: function() {
    return { }
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

</style>
