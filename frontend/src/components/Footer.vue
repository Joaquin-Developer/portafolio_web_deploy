<template>
<br><br><br><br><br>
  <footer class="footer py-5 bg-light">
    <div class="container">
      <div class="row footer_inner">
        <div class="col-lg-5 col-sm-6">
          <aside class="f_widget ab_widget">
            <div class="f_title">
              <h3>Acerca de</h3>
            </div>
            <p>
              Este portafolio web fué desarrollado con Vue.js. Puedes acceder al código
              <a href="https://github.com/Joaquin-Parrilla/portafolio_web_deploy">aquí</a>
            </p>
            <p>Copyright &copy; 2021 | Todos los derechos reservados.</p>
          </aside>
        </div>
        <div class="col-lg-5 col-sm-6">
          <aside class="f_widget news_widget">
            <div class="f_title">
              <h3>Curriculum</h3>
            </div>
            <p>Solicitame mi cv y te lo mando por correo!</p>
            <div id="mc_embed_signup">
              <form>
                <div class="input-group d-flex flex-row">
                  <input
                    class="form-control me-sm-2"
                    type="email"
                    placeholder="Tu correo"
                  />
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
        <div class="col-lg-2">
          <aside class="f_widget social_widget">
            <div class="f_title">
              <h3>Contactame:</h3>
            </div>
            <ul class="list">
              <li>
                <a href="mailto:joaquin.p.olivera@gmail.com">
                  <i class="fa fa-google" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/JoaqunParrilla2">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-parrilla-63092819b/">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/Joaquin703">
                  <i class="fa fa-telegram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data: () => ({}),

  created() {},
};
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.55);
}
footer {
  color: rgba(0, 0, 0, 0.55);
  text-shadow: 0 0 1px rgb(0 0 0 / 30%), 0 0 2px rgb(0 0 0 / 30%),
    0 0 5px rgb(0 0 0 / 20%);
}
</style>