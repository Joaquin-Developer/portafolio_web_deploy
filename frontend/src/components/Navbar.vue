<template>
  <nav id="nav" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">JOAQUIN-DEVELOPER</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#nav">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Acerca de mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Curriculum</a>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> -->
        <form class="navbar-nav form-inline my-2 my-lg-0 pull-left">
          <li class="nav-item">
            <a class="nav-link" href="mailto:joaquin.p.olivera@gmail.com">
              <i class="fa fa-google" aria-hidden="true"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/JoaqunParrilla2">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/joaqu%C3%ADn-parrilla-63092819b/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://t.me/Joaquin703">
              <i class="fa fa-telegram" aria-hidden="true"></i>
            </a>
          </li>
        </form>
      </div>
    </div>
  </nav><br>
</template>

<script>
export default {
  name: 'Navbar',
  props: { }
}
</script>

<style scoped>
</style>