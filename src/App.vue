<template>
  <div id="app">
    <nav class="navbar flex-column fixed-top">
      <div class="nav flex-column">
        <router-link to="/" class="navbar-brand">
          Laura
          <br />Gonzalez
          <br />Abad
        </router-link>
        <router-link to="/yo" class="nav-item nav-link">Yo!</router-link>
        <router-link to="/formacion" class="nav-item nav-link">Formación</router-link>
        <router-link to="/portfolio" class="nav-item nav-link">Portfolio</router-link>
        <router-link to="/experiencia" class="nav-item nav-link">Experiencia</router-link>
        <router-link to="/contacto" class="nav-item nav-link">Contacto</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
@import "../public/css/colores.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  width: 30%;
  height: 100vh;
  background-color: $color-primario;
  opacity: 0;
  animation: fadeIn-2 2s forwards;
  animation-delay: 7s;
}
.nav {
  padding-top: 8rem;
}

.navbar-brand {
  font-size: 1.4rem;
  margin-bottom: 6rem;
  color: white;
}

.nav-item {
  font-size: 1.3rem;
  margin: 0.2rem;
  color: $color-nav-item;
}
.icon {
  width: 0.1rem;
  height: auto;
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .nav-item {
    font-size: 1.6rem;
  }
  .navbar-brand {
    font-size: 1.8rem;
  }
  .navbar-brand br {
    display: none;
  }

  @media (min-width: 1024px) {
    .navbar-brand {
      font-size: 2.2rem;
      margin-bottom: 12rem;
    }

    .nav-item {
      font-size: 3rem;
      margin: 0.5rem;
    }
  }
}

@keyframes fadeIn-2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

