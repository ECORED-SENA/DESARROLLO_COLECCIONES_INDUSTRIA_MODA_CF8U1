<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Base del vestido

    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-6.row-bg-1.p-4
        .row-bg-p.mb-0
          p El vestido es una de las prendas más utilizadas históricamente por las mujeres y según las modificaciones que se le realicen, pueden ser formales, deportivos, casuales, para el verano, para el invierno. Es una prenda con la que se puede jugar muchísimo ya que se pueden hacer todas las variaciones imaginables en la parte superior, en la parte inferior, con mangas, sin mangas, con cuello sin cuello, con el tipo de escote deseado, con mucho vuelo, ajustado, etc.
          p Ahora veremos cómo se desarrolla el modelo de vestido:
      .col-12.col-md-6.row-bg-2.bg-img
        img.img-t.img-a(src='@/assets/ilustraciones/img59.svg', alt='')

    .titulo-segundo#t_9_1.mt-5
      .h4 9.1  Escalado del vestido

    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-primario.p-4.mb-4
              p Para empezar a escalar cualquier prenda se debe realizar el análisis de incrementos y disminución de medidas anatómicas utilizadas en el patronaje. 
              p Como ya se ha expresado anteriormente, cada escalado puede variar según el análisis de proporciones de las tablas de medidas que manejas. También puede variar la forma de repartición de las medidas a escalar y los puntos muertos o fijos que se dejan en el escalado.
              p A continuación, un ejemplo de escalado de vestido.
              p.mb-0 Se debe recordar que después de escalar se debe calcar cada uno de los patrones por talla deseada, con todas sus referencias y pinzas.
        .row.justify-content-start.align-items-center
          .col-8
            a.anexo.mt-3(:href="obtenerLink('/downloads/CF_8_U1_9_Base_de_vestido.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_9_Base de vestido.              
      .col-12.col-md-4.p-0
        img.img-t.img-a(src='@/assets/ilustraciones/img60.svg', alt='')               
 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
