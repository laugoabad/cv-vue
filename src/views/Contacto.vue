<template>
  <div id="contacto">
    <div class="fondo"></div>
    <div class="texto">
      <div class="pack">
          <div class="pack">
        <a href="mailto:laugoabad@gmail.com" ><h2>MAIL: laugoabad@gmail.com</h2></a>
      </div>
        <h2>TELEFONO: +54 9 11 5122 6486</h2>
      </div>
      <div class="pack">
        <h2>DIRECCION: Vicente López - GBA Norte - Prov. Bs. As</h2>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../public/css/colores.scss";

#contacto {
  width: 100%;
  height: 100vh;
  display: flex;
}
.fondo {
  flex: 0;
  background-color: #ffbe00;
  animation: animacion-2 13s forwards;
}
.texto {
  font-size: 1.8rem;
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
a {
    color:  #212529;
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
    padding: 5rem;
    margin: 0rem 0rem 0rem 46rem;
  }
}

@keyframes animacion {
  from {
    top: -30rem;
  }
  to {
    top: 5rem;
  }
}
@keyframes animacion-2 {
  100% {
    flex: 10;
  }
}
</style>