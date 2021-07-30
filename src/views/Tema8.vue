<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Básico de manga
    img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img55.png', alt='')
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-4
        img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img56.svg', alt='')
      .col-12.col-md-8
        p Para empezar a realizar una manga que se adapte al diseño, a la ocasión de uso y sea funcional, se deben analizar todas las variables para lograr el comportamiento idóneo que necesita la manga en la prenda.

        p Una de las variables cruciales en el patronaje de la manga, que afecta directamente la funcionalidad de esta, es la altura de cabeza de manga.

        p La altura de cabeza de manga siempre va a variar según el comportamiento que se requiere de esta manga, entre mayor altura tenga la cabeza de manga, menor movimiento se va a tener, mayor incomodidad va a generar y se verá más estructurada. Este tipo de cabeza de manga se utiliza en mayor medida, para prendas formales, ya que este tipo de prendas, requieren mayor estructura, no necesitan generar gran movilidad del cuerpo, puesto que lo que se pretende con este tipo de prendas es que ajusten de mejor forma a la antropometría del cuerpo, que la silueta se vea estilizada y la prenda no genere arrugas. Una altura de cabeza de manga media es utilizada en vestuario casual, ya que son mangas cómodas, que no son tan estructuradas, generan mejor movimiento del cuerpo y son las más utilizadas, puesto que funcionan de mejor manera para la mayoría de las prendas de vestir. Las alturas de cabeza de maga cortas, por su parte, se utilizan para vestuario deportivo, debido a que sus características se adaptan a las necesidades de mayor movimiento, mejor comodidad y menor estructura que exige el tipo de uso. 


    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p Las medidas de altura de cabeza de manga que se encuentran en tablas de medidas tienden a ser cabezas de manga media, para adaptarse a mayor número de diseños de línea casual.

        p También se puede llegar a encontrar la medida de la altura de cabeza de manga, por medida deducida teniendo como base el recorrido de las sisas, el largo de manga, el contorno de busto, entre otras.

        p Una de las formas para hallar las diferentes medidas de altura de cabeza de manga es:
        .row.justify-content-center.align-items-center
          .col-11        
            .list
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Dividir en 5 el recorrido de las sisas = Altura de cabeza de manga para ropa deportiva.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Dividir en 4 el recorrido de las sisas = Altura de cabeza de manga para ropa casual.
            .list.mt-2
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
                .list__txt 
                    span Dividir en 3 el recorrido de las sisas = Altura de cabeza de manga para ropa formal.         
      .col-12.col-md-4
        img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img57.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Existen diferentes formas y fórmulas de sacar la altura de cabeza de manga, lo importante es entender la lógica y la relación directa que existe entre la altura de cabeza de manga y la funcionalidad.

          p.mb-0 Veamos el paso a paso para construir este patrón.

    .row.justify-content-center.align-items-center.mt-5
      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/01.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/02.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/03.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/04.svg', alt='')
    .row.justify-content-center.align-items-center.mt-4
      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/05.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/06.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/07.svg', alt='')

      .col-6.col-md-3.mt-1
        img.img-t.img-a(src='@/assets/ilustraciones/08.svg', alt='')        

    .titulo-segundo#t_8_1.mt-5
      .h4 8.1  Variaciones de mangas 

    
    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-4
        img.img-t.img-a(src='@/assets/ilustraciones/img58.svg', alt='') 
      .col-12.col-md-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-primario.p-4.mb-4
              p Las variaciones de manga se realizan con el propósito de generar innumerables diseños y ajuste a las diferentes ocasiones de uso de las prendas de vestir.
              p.mb-0 Conoce en qué consisten dichas variaciones. 
        a.anexo.mt-3(:href="obtenerLink('/downloads/CF_8_U1_8-1_Variaciones_de_manga.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: CF8_U1_7-2_Cuellos por Union de hombro. (pendiente documetno descargable) 
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
