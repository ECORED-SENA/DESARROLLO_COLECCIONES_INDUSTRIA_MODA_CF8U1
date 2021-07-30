export default {
  global: {
    componenteFormativo: 'Patronaje y escalado femenino',
    descripcionCurso:
      'En este componente formativo se desarrollará el patronaje femenino, para ello se hace una breve inducción del tema, se explica la forma correcta de realizar la toma de medidas y seguidamente, se empieza con los desarrollos de patronajes tanto básicos como algunas interpretaciones y escalados. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inducción al patronaje y escalado femenino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Toma de medidas y cuadros de tallas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Básico de la falda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elaboración del patrón de la falda',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de pretina, para falda y pantalón',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diferentes largos y tipos de falda',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Escalado de la falda',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Desarrollo de modelos de faldas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trazado básico del corpiño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Desahogos o ampliaciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Traslado de pinzas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Pinzas de ajuste por contorno',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Variación del corpiño a blusa',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Escalado del corpiño',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cortes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Almillas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Almilla recta',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Almilla en “V”',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Almilla redondeada',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipos de escotes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Variaciones de cuellos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Cuellos por medida de contorno',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Cuellos por unión de hombro',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Cuellos por extensión',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Básico de manga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Variaciones de mangas',
            hash: 't_8_1',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Base del vestido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Escalado del vestido',
            hash: 't_9_1',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Básico del pantalón clásico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Básico del pantalón jeans y avíos',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Escalado del pantalón',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Básico de la chaqueta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '11.1',
            titulo: 'Escalado de chaqueta',
            hash: 't_11_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder Sennova',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Salomé Solano Sarria',
        cargo: 'Instructora',
        centro: 'Centro de Desarrollo Agroempresarial',
        regional: 'Cundinamarca',
      },
      {
        nombre: 'Maritza Rodríguez',
        cargo: 'Instructora',
        centro: 'Centro de manufactura en textil y cuero',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Fabio Andrés Gaviria',
        cargo: 'Experto temático',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo I: Mujer. Universidad Peruana de Ciencias Aplicadas (UPC). ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41322',
    },
    {
      referencia:
        'Cristóbal Antón, P. (2013). Escalar el patrón modelo. Ministerio de Educación de España. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/49353',
    },
    {
      referencia: 'Gaviria, A. (2018). Escalado.',
    },
    {
      referencia:
        'Gómez Correa, G. (2012). El lenguaje de los patrones en la moda. Editorial Nobuko. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/77891',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F. & Moreno Brand, D.(2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje. ',
      link: 'https://hdl.handle.net/11404/4725',
    },
    {
      referencia: 'Guzmán, E. (2010). Patronaje industrial de ropa de mujer. ',
      link: 'https://es.slideshare.net/mitus77/manual-patronaje-femenino',
    },
    {
      referencia:
        'Muñoz, M. (2004). Guía práctica patronaje y escalado industrial para prendas femeninas, masculinas e infantiles. MTM. ',
      link: 'https://dokumen.tips/documents/libro-de-escalado.html',
    },
  ],
  glosario: [
    {
      termino: 'Ángulo',
      significado:
        'Un ángulo es la región del plano limitada por dos semirrectas que se cortan en un punto llamado vértice. La distancia angular es medida en grados minutos y segundos de arco. Los ángulos se miden en grados (º).',
    },
    {
      termino: 'Ángulo recto',
      significado:
        'El ángulo que forman las rectas perpendiculares mide 90º, se denomina ángulo recto.',
    },
    {
      termino: 'Curva',
      significado: 'Conjunto de puntos que cambian continuamente de dirección.',
    },
    {
      termino: 'Diagonal',
      significado:
        'Dícese de la línea recta que va de un vértice a otro no inmediato.',
    },
    {
      termino: 'Diámetro',
      significado:
        'Línea recta que pasa por el centro del círculo y termina por ambos extremos en la circunferencia.',
    },
    {
      termino: 'Intersección',
      significado:
        'Conjunto que contiene los elementos comunes a los conjuntos dados. Punto donde se cruzan dos líneas.',
    },
    {
      termino: 'Línea',
      significado:
        'Es una figura geométrica que se genera por un punto en movimiento.',
    },
    {
      termino: 'Perpendicular',
      significado:
        'Es un término geométrico que puede ser usado como nombre o adjetivo. El significado del término hace referencia a la posición relativa de dos líneas rectas cuando forman un ángulo de noventa grados, un ángulo recto.',
    },
    {
      termino: 'Plano',
      significado:
        'Es una superficie que tiene longitud y anchura, pero no espesor. El plano tiene dos dimensiones. La geometría plana estudia por ejemplo los triángulos, cuadriláteros, circunferencias y círculos.',
    },
    {
      termino: 'Punto',
      significado: 'El punto es el elemento de representación más simple.',
    },
    {
      termino: 'Radio',
      significado:
        'El radio de una circunferencia es el segmento que une el centro de la circunferencia con un punto cualquiera de la misma. El radio mide la mitad del diámetro. Segmento trazado desde el centro del círculo a la circunferencia o desde el centro de la esfera a su superficie.',
    },
    {
      termino: 'Recta',
      significado:
        'La recta es la línea más corta que une dos puntos. Conjunto continúo de puntos, alineados en una dirección constante.',
    },
    {
      termino: 'Segmento',
      significado:
        'Es la parte de la recta que está delimitada por dos puntos que son los extremos del segmento, por tanto, se puede medir su longitud. ',
    },
    {
      termino: 'Simetría',
      significado:
        'La propiedad de un objeto o figura cuando las características (forma, tamaño y posición relativa de sus partes) son las mismas en ambos lados de una línea divisora o en torno a un centro.',
    },
    {
      termino: 'Vértice',
      significado:
        'Punto donde concurren los dos lados de un ángulo. Punto donde se unen tres o más planos. Cúspide de un cono o pirámide.',
    },
    {
      termino: 'Volumen',
      significado:
        'Extensión del espacio de tres dimensiones ocupado por un cuerpo.',
    },
  ],
  complementario: [
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Básico superior femenino. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/qOm2zlFEjMM',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Básico de falda femenino. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/FTMGK7dn5Io',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Introducción prendas superiores – femenino. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/g67F_G_fdXk',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Modificación de mangas para prendas superiores. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/S0WyxCZCeqI',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Modificación e implementación de básico de falda. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/xShxD5YL5ak',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Modificación e implementación de básico de pantalón. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/kSmtAgPon5o',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Traslados de pinza correctiva de talle. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/OnRi-Gir190',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Pinzas de ajuste por contorno. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/ovy-39xnpDQ',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Parte I- Blusa con almilla. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/DFJoMOmmP_4',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Trazo de cuellos. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/HzDac2zDoqs',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Sesión 5 -Trazo de chaqueta cuello sastre. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/gaKvoudUlzk',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Parte 1 - Trazo de manga y cabezas de manga. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/FFn5SWigHng',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Sesión 7 - Interpretación de mangas parte 2. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/8V8_1gCaJYU',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020).Interpretación de faldas. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/rcOo7XgtpGA',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Sesión 8 - Parte 2 faldas rotondas. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/-4XwrJ2bsk4',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Interpretación pantalón femenino. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/MG9Q66rpzr8',
    },
    {
      texto:
        'Centro de manufactura en textil y cuero. (2020). Básico de pantalón femenino. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=l70PGIZA8zs',
    },
    {
      texto:
        'Red Producción de contenidos Grupo Gestión Curricular SENA. (2021). Interpretación de mangas. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2a81MoVG6Dg',
    },
  ],
}
