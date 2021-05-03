<template>
  <div id="portfolio">
    <div class="fondo"></div>
    <div class="texto">
      <a href="https://www.durlock.com/" target="_blank">
        <h2>DURLOCK</h2>
      </a> 
       <a href="https://www.aua-natura.com" target="_blank">
        <h2>AUA</h2>
      </a>
      <a href="https://www.mattianebiolo.tk" target="_blank">
        <h2>MATTIA NEBIOLO ARCHITETTO</h2>
      </a>

      <a href="https://www.studioampia.com" target="_blank">
        <h2>STUDIO AMPIA</h2>
      </a>
       <a href="https://laugoabad.github.io/navbar-sin-js/" target="_blank">
        <h2>MAQUETADO MENU SIN JAVASCRIPT</h2>
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
  margin: 6rem 0rem 0rem 10rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  animation: animacion 4s forwards;
  a h2{
    font-size: 1.6rem;
    padding: 1rem;
  }

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
    margin: 3rem 0rem 0rem 12rem;
    a h2{
    font-size: 1.6rem;
    padding: 1.4rem;
  }
  }
  
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 768px) {
  .texto {
    padding: 4rem;
    margin: 2rem 0rem 0rem 20rem;
    a h2{
    font-size: 2rem;
    padding: 1.6rem;
  }
  }

  
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .texto {
    padding: 1.6rem;
    margin: 6rem 0rem 0rem 32rem;
    a h2{
    font-size: 2.6rem;
    padding: 2rem;
  }
  }
 
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .texto {
    padding: 5rem;
    margin: 5rem 0rem 0rem 42rem;
    a h2{
    font-size: 3.2rem;
    padding: 3rem;
  }
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