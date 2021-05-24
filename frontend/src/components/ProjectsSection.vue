<template>
  <h2>Mis Proyectos:</h2><br>
  <div>

  </div>

<hr class="my-4">
  <div class="row">
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
<hr class="white">
<style scoped></style>