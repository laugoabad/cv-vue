<template>
  <div id="contacto">
    <div class="fondo"></div>
    <div class="texto">
      <div class="pack">
        <a href="mailto:laugoabad@gmail.com">
          <h2>MAIL: <br>laugoabad@gmail.com</h2>
        </a>
      </div>
      <div class="pack">
        <h2>TELEFONO:<br> +54 9 11 5122 6486</h2>
      </div>
      <div class="pack">
        <h2>DIRECCION: <br>Vicente López - GBA Norte - Prov. Bs. As</h2>
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
  margin: 6rem 0rem 0rem 12rem;
  text-align: left;
  position: absolute;
  animation: animacion 4s forwards;
}

.pack h2, .pack a{
  margin: 1rem 0rem;
  padding: 1rem;
  font-size: 1.6rem;
}

h2 {
  font-weight: bold;
}
h3 {
  font-weight: 600;
}
a {
  color: #212529;
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
  .pack a, .pack h2 {
     font-size: 2.2rem;
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
  .pack a .pack h2 {
    font-size: 3rem;
  }
}

@keyframes animacion {
  from {
    top: -150rem;
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