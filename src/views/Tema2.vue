<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1.text-in Básico de la falda
    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/ilustraciones/img22.svg', alt='')

        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El básico de falda es un patrón que se requiere para la mayoría de las interpretaciones de faldas y para vestidos. Para la construcción de este patrón se requieren las siguientes medidas:

            .list.mt-3
                .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Contorno de cadera
            .list.mt-2
                .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Contorno de cintura
            .list.mt-2
                .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Altura de cadera
            .list.mt-2
                .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Largo de falda

    .row.justify-content-center.align-items-stretch.mt-5
      .col-md.tarjeta.color-secundario.border-left.p-5
        .row.justify-content-center.mb-4
          .col-6
            img.img-t.img-a(src='@/assets/ilustraciones/img23.svg', alt='')          
        .titulo-segundo_2#t_2_1.mt-5
          .h4 2.1 Elaboración del patrón de la falda
        p.text-center.mt-4 Ahora se presentan las instrucciones, paso a paso, para la elaboración del patrón.

      .col-md.tarjeta.color-acento-contenido.border-right.p-5
        .row.justify-content-center.mb-4
          .col-6
            img.img-t.img-a(src='@/assets/ilustraciones/img24.svg', alt='')
        .text-white
          .titulo-segundo_1#t_2_2.mt-5
            .h4 2.2 Tipos de pretina, para falda y pantalón
          p.text-center.mt-4 La pretina es la cinta que se utiliza para sujetar la falda y el pantalón de la cintura y se ubica en la parte superior de estos.     
    .row.justify-content-start.align-items-end.mt-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF8_U1_2_Patron_de_falda.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_2_Patron de falda.                         

    SlyderC(:datos="datosSlyder")

    .titulo-segundo#t_2_3
      .h4 2.3  Diferentes largos y tipos de falda
    .row.justify-content-center.align-items-center
      .col-12.col-md-7
        p Las faldas se pueden patronar en infinidad de diseños y van acompañadas de todos los largos imaginables, que van desde faldas al piso, con cola o diferentes largos y faldas micro.
        .row.justify-content-center.align-items-center
          .col-11        
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Micro: son las faldas en las cuales su largo está a 10 cm en promedio por debajo de la altura de cadera.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Mini: son faldas cuyo largo están por debajo de las faldas micro y encima de la rodilla.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Rodilla: son faldas que se encuentran a la altura de la rodilla.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Chanel: son faldas que se encuentra justo debajo de la rodilla.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Midi: son faldas cuyo largo se encuentra entre el tobillo y justo debajo de la rodilla.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Maxi: son faldas cuyo largo va hasta el piso.
      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img28.png', alt='')    

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .row
          .col-lg-12
            .cajon.color-primario.p-4.mb-4
              img.img-t.img-a(src='@/assets/ilustraciones/img29.svg', alt='')    

    .titulo-segundo#t_2_4.mt-5
      .h4 2.4  Escalado de la falda 
    .row.justify-content-start.align-items-center.mt-5
      .col-12.col-md-8
        p Para empezar a escalar cualquier prenda se debe realizar el análisis de incrementos y disminución de medidas anatómicas utilizadas en el patronaje. Las medidas requeridas en este patronaje fueron las siguientes.
        .row.justify-content-center.align-items-center
          .col-11        
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Contorno de cadera: por esta medida el aumento es de 4 cm, según el cuadro de tallas manejado en este caso. Se debe recordar que esta medida es una medida circular, por lo tanto, si se maneja la cuarta parte de la medida del cuerpo, dicho aumento también se debe dividir en 4.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Contorno de cintura: por esta medida el aumento es de 4 cm, según el cuadro de tallas manejado en este caso. Se debe recordar que esta medida es una medida circular, por lo tanto, si se maneja la cuarta parte de la medida del cuerpo, dicho aumento también se debe dividir en 4.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Altura de cadera: por esta medida el aumento es de 0.25 cm, según el cuadro de tallas manejado en este caso. Se debe recordar que las medidas de largo no se deben dividir.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Largo de falda: por esta medida el aumento es de 0.5 cm, según el cuadro de tallas manejado en este caso. Se debe recordar que las medidas de largo no se deben dividir.         
      .col-12.col-md-3
        img.img-t.img-a(src='@/assets/ilustraciones/img30.svg', alt='')    

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-6
        .row
          .col-lg-12
            .cajon.color-primario.p-4.mb-4
              img.img-t.img-a.size-img(src='@/assets/ilustraciones/img31.svg', alt='')    
      .col-12.col-md-6
        .row
          .col-lg-12
            .cajon.color-acento-contenido.p-4.mb-4            
              img.img-t.img-a(src='@/assets/ilustraciones/img32.svg', alt='')    

    .titulo-segundo#t_2_5.mt-5
      .h4 2.5  Desarrollo de modelos de faldas 
    p Existen en el mercado gran variedad de modelos de faldas. A continuación, se indicarán las instrucciones para realizar algunos de estos modelos, los cuales varían un poco en su patrón específico:

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/1.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/2.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/3.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-4

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/4.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/5.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/14.svg', alt='')    

    .row.justify-content-center.align-items-center.mt-4
      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/6.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/7.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/8.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-4

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/9.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/10.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/11.svg', alt='')   

    .row.justify-content-center.align-items-end.mt-4

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/12.svg', alt='')    

      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/13.svg', alt='')    

      .col-12.col-md-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF_8_U1_2-5_Modelos_de_faldas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF_8_U1_2-5_Modelos de faldas. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Pretina recta',
        texto:
          'Para la elaboración de este molde básico es necesaria la sumatoria de las medidas de: contorno de cintura más el cruce de sistema de cierre de la prenda.<br>Para construirla se realiza un rectángulo con el resultado de esta sumatoria por el ancho de pretina deseado, el cual puede variar de acuerdo con el diseño. El ancho de una pretina básica es de 10 cm, la cual al ser confeccionada quedaría de 4 cm, ya que se usan 2 cm para costura entalegada y se dobla a la mitad.<br>Luego, hay que ubicar, sobre las líneas horizontales del rectángulo, la mitad y a cada lado 5 cm con un piquete sobre cada una de ellas, los cuales son de ayuda en el momento de la confección.',
        imagen: require('@/assets/ilustraciones/img25.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pretina anatómica o curva',
        texto:
          'La pretina anatómica se logra uniendo por el costado las pretinas resultantes del trazo (delantera y posterior). Luego, se marca la línea de aplome en donde estaba el costado. Finalmente, se le aumenta por centro frente, la medida de cruce según el sistema de cierre deseado.',
        imagen: require('@/assets/ilustraciones/pretina.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
