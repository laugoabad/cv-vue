<template>
  <div id="experiencia">
    <div class="fondo"></div>
    <div class="texto">
      <div class="pack">
        <h2>WEB DEVELOPER FRONT END</h2>
        <h3>Freelance | 2019 - a la fecha</h3>
        <h4>
          Me ocupo de armar Landing Pages usando SPA con Vue.js , maquetado
          responsive , animaciones.
          Personalización de temas y carga de contenido en
          Wordpress.
        </h4>
      </div>
      
      <div class="pack">
        <h2>DIRECTORA DE OBRA</h2>
        <h3>Estudio Laura Gonzalez Abad | 2003 - 2018</h3>
        <h4>
          Diseño y Dirección de Obra de viviendas y locales comerciales.
          Manejando un mínimo de 5 personas a cargo
        </h4>
      </div>
    
      <div class="pack">
        <h2>ADMINISTRATIVA Y PROGRAMADORA</h2>
        <h3>Subtronic S.A. | 1989 - 2000</h3>
        <h4>
          Gestión de tareas Contables y Administrativas.
          Gestión de software para la determinación de configuración de
          líneas de mangueras flotantes para la carga y descarga de
          petroleo y gas.
          Trabajé en Italia y Argentina desarrollando las mismas tareas.
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../public/css/colores.scss";

#experiencia {
  width: 100%;
  height: 100vh;
  display: flex;
}
.fondo {
  flex: 0;
  background-color: #1f6cb0;
  animation: animacion-2 13s forwards;
}
.texto {
  font-size: 2rem;
  color: $color-secundario;
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
  font-size: 1.9rem;
}
h3 {
  font-weight: 600;
  font-size: 1.7rem;
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 425px) {
  .texto {
    font-size: 2rem;
    padding: 1rem;
    margin: 1rem 0rem 0rem 14rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 768px) {
  .texto {
    font-size: 2.8rem;
    padding: 2rem;
    margin: 1rem 0rem 0rem 24rem;
  }
}
/*------------------------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .texto {
    font-size: 3.2rem;
    padding: 3rem;
    margin: 0rem 0rem 0rem 36rem;
  }
}

/*------------------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .texto {
    font-size: 4rem;
    padding: 4rem;
    margin: 0rem 0rem 0rem 46rem;
  }
}

@keyframes animacion {
  from {
    top: 200rem;
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