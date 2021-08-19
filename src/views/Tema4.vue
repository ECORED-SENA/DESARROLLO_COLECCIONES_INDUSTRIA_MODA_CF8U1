<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1.text-in Cortes
    img.img-t.img-a.mb-0(src='@/assets/ilustraciones/img45.svg', alt='')
    p.my-5 Las prendas se componen de una unión entre diferentes cortes, diferente cuello, mangas y escotes, para desarrollar infinidad de diseños.
    a.anexo.mb-4(:href="obtenerLink('/downloads/CF_8_U1_4_Cortes.pdf')" target="_blank")
      .anexo__icono
        img(src="@/assets/template/icono-pdf.svg")
      .anexo__texto
        p #[b Anexo.]  Cartilla con el paso a paso para la elaboración del patrón- nombrado: Cortes

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
