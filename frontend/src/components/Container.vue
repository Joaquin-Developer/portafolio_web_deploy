<template>
<div class="row mb-3">
  <div class="col-4">
    <img class="profilePhoto" src="../assets/FotoPerfil.jpg" width="280" height="220">
  </div>
  <div class="col-8">
    <h1>JOAQUÍN PARRILLA</h1>
    <hr>
    <h3>SOFTWARE DEVELOPER</h3>
  </div>
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
  padding: 30px;
  border: 1px solid grey;
}

.profilePhoto {
  /* border-radius: 50%; */
  /* margin-left: 50%; */
  width:300px;
  height:300px;
  border-radius:150px;
}

</style>
