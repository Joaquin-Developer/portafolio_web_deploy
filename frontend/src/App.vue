<template>
  <Navbar/>
  <div class="container">
    <Container/>  
    <Footer/>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Container,
    Footer
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
