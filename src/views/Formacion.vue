<template>
  <div id="formacion">
    <div class="fondo"></div>
    <div class="texto">
      <div class="pack">
        <h2>FULL STACK DEVELOPER</h2>
        <h3>Acamica - 2018</h3>
        <h4>Cursada completada</h4><br>
        <h2>ANALISTA DE SISTEMAS</h2>
        <h3>UB - 1989 - 2do Promedio</h3>
        <h4>Cursada completada</h4>
      </div>
      <div class="pack">
        <h2>CURSOS DE ESPECIALIZACION</h2>
        <h3>Vue.js - Udemy</h3>
        <h3>Node.js - Acamica</h3>
        <h3>Saas - Acamica</h3>
        <h3>Project Manager - UTN</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../public/css/colores.scss";

#formacion {
  width: 100%;
  height: 100vh;
  display: flex;
}
.fondo {
  flex: 0;
  background-color: #51af5b;
  animation: animacion-2 13s forwards;
}
.texto {
  font-size: 2rem;
  margin: 2rem 0rem 0rem 10rem;
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
    font-size: 3.5rem;
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
  from {top: 200rem;}
  to {top: 0rem;}
}
@keyframes animacion-2 {
  100% {
    flex: 10;
  }
}
</style>