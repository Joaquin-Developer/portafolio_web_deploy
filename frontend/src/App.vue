<template>
  <Navbar/>
  <div class="container">
    <Container/>
    <ProjectsSection/>
  </div>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Container from './components/Container.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Container,
    ProjectsSection,
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
