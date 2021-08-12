<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 11
      h1.text-in Básico de chaqueta
        
    img.img-t.img-a(src='@/assets/ilustraciones/img72.png', alt='')       

    p.mt-5 El tipo de chaqueta desarrollado a continuación es una chaqueta de corte formal con ajuste en la figura y estructurada. Quiere decir que no es una chaqueta que se pueda usar para prendas deportivas o informales por sus características.
    p Ahora se explicará el paso a paso para la construcción de este patrón:
    .row.justify-content-end.align-items-center
      .col-5
        a.anexo.mt-2(:href="obtenerLink('/downloads/CF_8_U1_11_Basico_de_chaqueta.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_11_Basico de chaqueta.
    .titulo-segundo#t_11_1.mt-5
      .h4 11.1 scalado de chaqueta

    .row.justify-content-center.align-items-stretch.cajon.color-primario.p-4.mb-4.mt-5
      .col-12.col-md-7.mt-3
        p Para empezar a escalar una prenda con muchas piezas, después del análisis del incremento o decrecimiento de las medidas según la talla y proporción, se debe repartir estas medidas, ya no solo teniendo en cuenta las cuartas partes con las que se patronó, sino también se debe dividir eso en el número de cortes que tiene el plano.

        p El ejemplo a continuación muestra una de las formas en las que se puede realizar el escalo de patrones con varias piezas. Se debe recordar, que también se pueden manejar puntos muertos o fijos para realizar estos escalados.

        p Después de realizar el escalado se debe calcar cada pieza por cada talla deseada, con toda su señalización. 
      .col-12.col-md-5.mt-3
        img.img-t.img-a(src='@/assets/ilustraciones/img73.svg', alt='')       

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
