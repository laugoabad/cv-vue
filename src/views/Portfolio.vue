<template>
  <div id="portfolio">
    <div class="fondo"></div>
    <div class="texto">
      <div class="pack">
        <a href="https://www.mattianebiolo.tk" target="_blank"><h2>MATTIA NEBIOLO ARCHITETTO</h2></a>
      </div>
      <div class="pack">
        <a href="https://www.studioampia.com" target="_blank"><h2>STUDIO AMPIA</h2></a>
      </div>
      <div class="pack">
        <a href="https://www.rompecabezas.tk" target="_blank"><h2>ROMPECABEZAS</h2></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../public/css/colores.scss";

#portfolio {
  width: 100%;
  height: 100vh;
  display: flex;
}
.fondo {
  flex: 0;
  background-color: #f88020;
  animation: animacion-2 13s forwards;
}
.texto {
  font-size: 2rem;
  margin: 6rem 0rem 0rem 10rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  animation: animacion 4s forwards;
}

.pack {
    margin: 4rem 0rem;
}

h2 {
    font-weight: bold;
}
h3{
    font-weight: 600;
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
    padding: 4rem;
    margin: 0rem 0rem 0rem 36rem;
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
  from {top: -100rem;}
  to {top: 0rem;}
}
@keyframes animacion-2 {
  100% {
    flex: 10;
  }
}
</style>