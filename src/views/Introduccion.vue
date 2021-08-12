<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1.text-in Introducción
    img.img-t.img-a(src='@/assets/ilustraciones/img1.svg', alt='')    

    p.mt-5 En esta unidad se encontrará con un acercamiento al patronaje femenino y el escalado del mismo, donde se desarrollarán diversos patrones básicos e interpretaciones para conocer y apropiar el conocimiento con respecto a este tema.

    p Podrá encontrar un poco de la historia del patronaje femenino, sus inicios y los cambios que ha tenido a través del tiempo, encontrará también la explicación de la correcta toma de medidas anatómicas, se le presentará un ejemplo de tabla de medidas y la importancia de esta en el desarrollo de patronaje y escalado. También hallará el paso a paso para el desarrollo de los patronajes básicos y algunas interpretaciones, como los son de falda, corpiño, blusa, mangas, pantalón, chaqueta.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
