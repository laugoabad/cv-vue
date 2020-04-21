<template>
    <div class="fondo">
      <img src="./../assets/imgs/computer-2982270_1920.jpg" alt />
      <div class="texto">
        <pre>{{texto}}</pre>
      </div>
    </div>

</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      texto:
        "FRONTEND DEVELOPER   MAQUETADO   HTML5   JAVASCRIPT   CSS   VUE.JS   CSS   SASS   BOOTSTRAP   "
    };
  }
};
</script>

<style>
/*Imagen de <a href="https://pixabay.com/es/users/Skitterphoto-324082/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">Rudy and Peter Skitterians</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">Pixabay</a>*/

.fondo img {
  width: 100%;
  height: auto;
  opacity: 0.3;
}
.texto {
  font-size: 2rem;
  position: absolute;
  left:10rem;
  top: 50%;
  opacity: 1;
}
.texto pre {
  color: #442727;
}

.fondo {
  position: absolute;
  top: 0;
}

@media (min-width: 768px) {
  .texto pre {
    font-size: 3rem;
  }
}
</style>