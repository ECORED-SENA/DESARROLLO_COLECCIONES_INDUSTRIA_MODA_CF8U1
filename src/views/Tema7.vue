<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Variaciones de cuellos

    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-5.row-bg-1.p-4
        .p-2.row-bg-p.mb-0
          p El cuello es la pieza de la prenda que rodeará el cuello anatómico del cuerpo femenino. 
          p Estos cuellos se pueden catalogar se las siguientes maneras según su comportamiento y forma de patronar.
      .col-12.col-md-5.row-bg-2.bg-img
        img.img-t.img-a(src='@/assets/ilustraciones/img51.png', alt='')

    .titulo-segundo#t_7_1.mt-5
      .h4 7.1  Cuellos por medida de contorno 
    
    .row.justify-content-start.align-items-center
      .col-12.col-md-6
        p Estos cuellos son aquellos que forman una tira, salen en un plano a parte del plano de la prenda y montan o abrazan con su forma el cuello. Al patronar estos cuellos, entre más centímetros se suban, a partir de centro frente, mayor estructurados quedarán y mientras más centímetros se bajen, a partir de centro frente, menos estructurados serán y caerán sobre el cuerpo.

        p Los cuellos que hacen parte de esta clasificación son: cuello nerú, cuello sport y cuello camisero (compuesto por un pie de cuello). Veamos en qué consisten estas variaciones:
        a.anexo.mt-5(:href="obtenerLink('/downloads/CF_8_U1_6_Tipos_de_escotes.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_7-1_Cuellos por Medida de Contorno. (pendiente documetno descargable)
      .col-12.col-md-5
        img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img52.png', alt='')

    .titulo-segundo#t_7_2.mt-5
      .h4 7.2  Cuellos por unión de hombro  
    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/ilustraciones/img53.svg', alt='')

        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Estos cuellos no montan sobre el cuello sino que descansan sobre el cuerpo y salen del mismo plano con que está trabajando. Los cuellos que hacen parte de esta clasificación son: cuello bebe, cuello marinero y todo cuello que descanse sobre la estructura del cuerpo.  

    .row.justify-content-end.align-items-center
      .col-6
        a.anexo.mt-5(:href="obtenerLink('/downloads/CF_8_U1_6_Tipos_de_escotes.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_7-2_Cuellos por Union de hombro. (pendiente documetno descargable)   

    .titulo-segundo#t_7_3.mt-5
      .h4 7.3  Cuellos por extensión 
    .row
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estos cuellos son aquellos que tienen las dos características de los cuellos anteriores, una parte abraza el cuello y otra descansa sobre el cuerpo.  Los cuellos que hacen parte de esta clasificación son: cuello esmoquin y cuello sastre.         

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img54.svg', alt='')

    .row.justify-content-start.align-items-center
      .col-6
        a.anexo.mt-5(:href="obtenerLink('/downloads/CF_8_U1_7-3_Cuellos_Por_Extension.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: F8_U1_7-3_Cuellos Por Extension.
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
