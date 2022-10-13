<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img.mb-5(src="@/assets/curso/temas/img-1.jpg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") El desembalaje de residuos de aparatos eléctricos y electrónicos no es una práctica fortuita sino que está fundamentada en normativas y procedimientos técnicos que definen su clasificación y disposición. El siguiente video expone y deja en evidencia la importancia de este aspecto en la actualidad.

    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
