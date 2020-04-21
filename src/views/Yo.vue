<template>
  <div id="yo">
    <div class="fondo"></div>
    <p class="texto">
     {{texto}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto:'Me dedico sobre todo al Front End, apasionada por el diseño web, aunque también manejo algo de base de datos y back end. Me ocupo básicamente de maquetado responsive en modo freelance y últimamente estoy incursionando en las SPA usando Vue.js. Me gusta trabajar en equipo pero puedo también trabajar en modo remoto.'
      }
  },
};
</script>


<style lang="scss" scoped>
@import "../../public/css/colores.scss";


#yo {
  width: 100%;
  height: 100vh;
  display: flex;
}
.fondo {
  flex: 0;
  background-color: #84a9ac;
  animation: animacion-2 13s forwards;
}
.texto {
  font-size: 2rem;
  margin: 1rem 0rem 0rem 10rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  animation: animacion 4s forwards;
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 425px) {
  .texto {
    font-size: 2.2rem;
    padding: 3rem;
    margin: 1rem 0rem 0rem 12rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 768px) {
  .texto {
    font-size: 3rem;
    padding: 4rem;
    margin: 1rem 0rem 0rem 24rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .texto {
    font-size: 3.5rem;
    padding: 4rem;
    margin: 1rem 0rem 0rem 36rem;
  }
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .texto {
    font-size: 4.8rem;
    padding: 5rem;
    margin: 0rem 0rem 0rem 46rem;
  }
}

@keyframes animacion {
  0% {top: -100rem;}
  100% {top: 0rem;}
}
@keyframes animacion-2 {
  100% {
    flex: 10;
  }
}
</style>