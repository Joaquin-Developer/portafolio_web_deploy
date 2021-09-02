<template>
  <h2>Mis Proyectos:</h2>
  <hr class="my-4">

  <!-- <div class="row">
    <div class="col-sm-4">
      <div class="card border-info mb-3" style="max-width: 20rem;">
        <div class="card-header">APLICACIÓN PARA ORGANIZAR TAREAS</div>
        <div class="card-body">
          <p class="card-text">
            App web para organizar mis tareas del día a día.
          </p>
          <div class="contentCenter">
            <img src="https://joaquinparrilla.herokuapp.com/static/img/AppOMD.jpeg" width="200" height="140">
          </div>
          <a href="https://github.com/Joaquin-Parrilla/organiza_mi_dia" class="card-link">Código en GitHub</a>
          <a href="http://joaquindeveloper.pythonanywhere.com/" class="card-link">Usar la app</a>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card border-info mb-3" style="max-width: 20rem;">
        <div class="card-header">SISTEMA DE TELEDIAGNOSTICO MÉDICO</div>
        <div class="card-body">
          <p class="card-text">
            Sistema desarrollado en .NET que permite obtener un diagnóstico médico a partir de síntomas y tener un chat con un médico.
          </p>
          <div class="contentCenter">
            <img src="https://joaquinparrilla.herokuapp.com/static/img/sistemaTelediagnosticoFrontend.png" width="200" height="140">
          </div>
          <a href="https://github.com/Joaquin-Parrilla/Sistema_Telediagnostico_Medico" class="card-link">Código en GitHub</a>
        </div>
      </div>
    </div>
    
    <div class="col-sm-4">
      <div class="card border-info mb-3" style="max-width: 20rem;">
        <div class="card-header">SCRIPTS PARA GESTIÓN DE SERVIDOR CentOS</div>
        <div class="card-body">
          <p class="card-text">
            Scripts para hacer tareas típicas de mantenimiento, monitoreo, gestión, respaldos, etc, en un sistema RedHat 
          </p><br>
          <div class="contentCenter">
            <img src="https://joaquinparrilla.herokuapp.com/static/img/centroComputos.jpeg" width="200" height="140">
          </div>
          <a href="https://github.com/Joaquin-Parrilla/Scripts_Gestion_Monitoreo_Config_CentOS" class="card-link">Código en GitHub</a>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card border-info mb-3" style="max-width: 20rem;">
        <div class="card-header">SEGUIMIENTO DEL COVID-19 EN VIVO (Aplicación Web)</div>
        <div class="card-body">
          <p class="card-text">
            Aplicación web que se encarga de consumir una API y mostrar los datos mas relevantes del Covid-19 en Uruguay y en el mundo.
          </p>
          <div class="contentCenter">
            <img src="https://joaquinparrilla.herokuapp.com/static/img/CovidEnVivo.png" width="200" height="140">
          </div>
          <a href="https://github.com/Joaquin-Parrilla/CovidEnVivo" class="card-link">Código en GitHub</a>
          <a href="https://joaquin-parrilla.github.io/CovidEnVivo/" class="card-link">Usar la app</a>
        </div>
      </div>
    </div>
  </div> -->
  
  <div class="projects">

    <div class="project card border-info">
      <div class="contentCenter">
        <img class="project_image" src="https://joaquinparrilla.herokuapp.com/static/img/AppOMD.jpeg" alt="" srcset="">
      </div>
      <div class="text_project">
        <div class="card-header">
          <h4>App para Organizar Tareas</h4>
        </div>
        <p>Applicación web para organizar mis tareas del día a día.</p>
        <a href="https://github.com/Joaquin-Parrilla/organiza_mi_dia" class="card-link">Código en GitHub</a>
        <a href="http://joaquindeveloper.pythonanywhere.com/" class="card-link">Usar la app</a>
      </div>
    </div>

    <div class="project card border-info">
      <div class="contentCenter">
        <img class="project_image" src="https://joaquinparrilla.herokuapp.com/static/img/sistemaTelediagnosticoFrontend.png" alt="" srcset="">
      </div>
      <div class="text_project">
        <div class="card-header">
          <h4>Sistema de Telediagnóstico Médico</h4>
        </div>
        <p>Aplicación de escritorio que permite obtener un diagnóstico médico a partir de síntomas y tener un chat con un médico.</p>
        <a href="https://github.com/Joaquin-Parrilla/Sistema_Telediagnostico_Medico" class="card-link">Código en GitHub</a>
      </div>
    </div>

    <div class="project card border-info">
      <div class="contentCenter">
        <img class="project_image" src="https://joaquinparrilla.herokuapp.com/static/img/centroComputos.jpeg" alt="" srcset="">
      </div>
      <div class="text_project">
        <div class="card-header">
          <h4>Scripts para gestionar servidor CentOS</h4>
        </div>
        <p>Scripts para hacer tareas típicas de mantenimiento, monitoreo, gestión, respaldos, etc, en un sistema RedHat </p>
      </div>
    </div>

    <div class="project card border-info">
      <div class="contentCenter">
        <img class="project_image" src="https://joaquinparrilla.herokuapp.com/static/img/CovidEnVivo.png" alt="" srcset="">
      </div>
      <div class="text_project">
        <div class="card-header">
          <h4>Seguimiento del Covid-19 en Vivo</h4>
        </div>
        <p>Aplicación web que se encarga de consumir una API y mostrar los datos mas relevantes del Covid-19 en Uruguay y en el mundo.</p>
      </div>
    </div>
  </div>
    
</template>

<script>
// import axios from 'axios'

export default {
  name: 'ProjectsSection',
  props: {
    
  },
  data: () => ({

  }),

  created() {
  }
}
</script>

<style scoped>

h4 { text-align: center; }

.projects 
{
  max-width: 1000px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  box-sizing: border-box;
  margin-bottom: 2em; 
  display: grid;
  grid-template-columns: repeat(1, 1fr) !important;
  grid-gap: 30px;
}

.project {

  padding: 1em;
}

.project_image {
  align-items: center;
  max-width: 50%;
  display: block;
  transition: all 300ms;
}

.project_image:hover {
  transform: scale(1.75);
}

.text_project {
  padding: 1em;
}

@media (max-width: 767px) {
  .projects {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

@media (min-width: 768px) {
  .projects {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

</style>