<template>
  <Navbar/>
  <div class="container">
    <Container/>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Container
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
