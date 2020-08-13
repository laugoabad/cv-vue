<template>
  <div id="portfolio">
    <div class="fondo"></div>
    <div class="texto">
       <a href="https://www.aua-natura.com" target="_blank">
        <h2>AUA</h2>
      </a>
      <a href="https://www.mattianebiolo.tk" target="_blank">
        <h2>MATTIA NEBIOLO ARCHITETTO</h2>
      </a>

      <a href="https://www.studioampia.com" target="_blank">
        <h2>STUDIO AMPIA</h2>
      </a>

      <a href="https://www.rompecabezas.tk" target="_blank">
        <h2>ROMPECABEZAS</h2>
      </a>
     

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
.texto{
  margin: 8rem 0rem 0rem 8rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  animation: animacion 4s forwards;
}

.texto a h2{
    font-size: 1.6rem;
    padding: 1.4rem;
  }

h2 {
  font-weight: bold;
}
h3 {
  font-weight: 600;
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 425px) {
  .texto {
    padding: 3rem;
    margin: 6rem 0rem 0rem 12rem;
  }
  .texto a h2{
    font-size: 1.8rem;
    padding: 1.4rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 768px) {
  .texto {
    padding: 4rem;
    margin: 5rem 0rem 0rem 24rem;
  }

  .texto a h2{
    font-size: 2.2rem;
    padding: 2rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .texto {
    padding: 6rem;
    margin: 8rem 0rem 0rem 32rem;
  }
  .texto a h2{
    font-size: 2.8rem;
    padding: 3rem;
  }
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .texto {
    padding: 5rem;
    margin: 10rem 0rem 0rem 46rem;
  }
  .texto a h2{
    font-size: 3.2rem;
    padding: 3rem;
  }
}

@keyframes animacion {
  from {
    top: -100rem;
  }
  to {
    top: 0rem;
  }
}
@keyframes animacion-2 {
  100% {
    flex: 10;
  }
}
</style>