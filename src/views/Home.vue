<template>
  <div id="presentacion">
    <div class="texto-animated">
      <pre>{{texto}}</pre>
    </div>
    <div class="figura-1">
      <div id="primerDiv"></div>
      <div id="segundoDiv"></div>
    </div>
    <div class="fondo-1">
    </div>
    <div class="texto text-center">
      FRONT<br>END<br>DEV
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto:
        "HTML5  JAVASCRIPT  CSS  VUE.JS  SASS  BOOTSTRAP  GIT  MySQL"
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/css/colores.scss";

/*Imagen de <a href="https://pixabay.com/es/users/Skitterphoto-324082/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">Rudy and Peter Skitterians</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">Pixabay</a>

Imagen de <a href="https://pixabay.com/es/users/hikersbay-95996/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=545772">hikersbay</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=545772">Pixabay</a>

Imagen de <a href="https://pixabay.com/es/users/markusspiske-670330/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1486358">Markus Spiske</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1486358">Pixabay</a>

*/


.texto-animated {
  font-size: 1.1rem;
  position: absolute;
  left: 30rem;
  opacity: 1;
  top: 50%;
  animation: mymove-1 6s forwards;
  overflow: hidden;
  color: $color-terciario;
}

.texto {
  font-size: 4.8rem;
  line-height: 6rem;
  position: absolute;
  left: 40%;
  top: 30%;
  opacity: 0;
   animation: fadeIn-2 6s forwards;
  -moz-animation:  fadeIn-2 6s forwards;
  -webkit-animation: fadeIn-2 6s forwards;
  -o-animation: fadeIn-2 6s forwards;
   animation-delay: 6s;
} 
.figura-1 {
  width: 100%;
  height: 100vh;
  display: flex;
}

.figura-1 #primerDiv {
  flex: 0;
}
.figura-1 #segundoDiv {
  flex: 10;
}

#primerDiv {
  background-color: $color-primario;
  animation: mymove-2 5s 3s forwards;
}
#segundoDiv {
  background-color: $color-secundario;
  animation: mymove-3 5s 3s forwards;
}
.fondo-1 {
  height: 100vh;
  width: 100%;
  background-image: url('./../assets/imgs/office-1486358_1280.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  opacity: 0;
  animation: fadeIn 6s forwards;
  -moz-animation:  fadeIn 6s forwards;
  -webkit-animation: fadeIn 6s forwards;
  -o-animation: fadeIn 6s forwards;
   animation-delay: 6s;
}


/*--------------------------------------------------------------------------------------------------------------------*/
@media(min-width:768px) {
  .texto-animated {
    font-size: 2.4rem;
    left: 80rem;
    top: 50%;
  }
  .texto {
    font-size: 10rem;
    line-height: 12rem;
    left: 45%;
    top: 20%;
  }
  .fondo-1 {
     background-image: url('./../assets/imgs/computer-2982270_1920.jpg');
  }
}
/*-------------------------------------------------------------------------------------------------------------------*/
@media(min-width:1024px) {
  .texto-animated {
    font-size: 3rem;
    left: 120rem;
  }
   .texto {
    font-size: 12rem;
    line-height: 14rem;
  }
}
/*--------------------------------------------------------------------------------------------------------------------*/
@media(min-width:1440px) {
  .texto-animated {
    font-size: 4rem;
    left: 140rem;
  }
}


@keyframes mymove-1 {
  50% {opacity: 1}
  100% {left: 0rem; opacity: 0}
}

@keyframes mymove-2 {
  50% {
    flex: 10;
  }
}
@keyframes mymove-3 {
  50% {
    flex: 0;
  }
}
@keyframes fadeIn {
 from {opacity: 0;}
 to {opacity: 0.3;}
}
@keyframes fadeIn-2 {
 from {opacity: 0;}
 to {opacity: 0.9;}
}

</style>
