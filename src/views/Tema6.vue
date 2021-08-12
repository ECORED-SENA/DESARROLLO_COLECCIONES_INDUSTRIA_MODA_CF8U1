<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1.text-in Tipos de escotes
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-3
        .row
          .col-lg-12
            .cajon.color-primario.p-4.mb-4 
              p Los tipos de escotes reciben el nombre de su forma y se componen de ancho y largo. Los anchos se dan por hombro y los largos se dan por centro frente y posterior. Las medidas de anchos de escote deben coincidir tanto en delantero como en posterior, para que al momento de confeccionar casen perfectamente. La medida de los largos, por el contrario, no debe coincidir, se pueden manejar diferentes largos según el diseño deseado.
              p Los escotes se pueden combinar según el gusto o diseño, por ejemplo, se puede tener en el delantero un escote redondo y en el posterior un escote en “v” o viceversa. 

      .col-12.col-md-9
        img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img50.svg', alt='')   
    a.anexo.mt-5(:href="obtenerLink('/downloads/CF_8_U1_6_Tipos_de_escotes.pdf')" target="_blank")
      .anexo__icono
        img(src="@/assets/template/icono-pdf.svg")
      .anexo__texto
        p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_6_Tipos de escotes.

        
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
