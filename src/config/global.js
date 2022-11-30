export default {
  global: {
    componenteFormativo:
      'Desensamblaje de residuos de aparatos eléctricos y electrónicos',
    descripcionCurso:
      'En este componente formativo se tratan conceptos relacionados con los residuos de aparatos eléctricos y electrónicos, su clasificación, tratamiento y disposición final; así como la aplicación de la normatividad vigente y el impacto causado al medio ambiente y la salud de las personas cuando no se realiza la debida gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
    ],
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
        titulo: 'Tipos de aparatos eléctricos y electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Residuo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equipamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ética',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos de marca',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Corrientes de materiales recuperados',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Clasificación de residuos de aparatos eléctricos y electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Separación y clasificación de residuos según sus características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Disposición final de residuos peligrosos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Riesgo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Almacenamiento de residuos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de manipulación de cargas',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
      referencia:
        'Ministerio del ambiente. (2010). <em>Lineamientos Técnicos para el Manejo de Residuos de Aparatos Eléctricos y Electrónicos.</em>',
      tipo: 'Texto',
      link:
        'http://www.residuoselectronicos.net/wp-content/uploads/2012/03/Guia_RAEE_MADS_2011-reducida.pdf',
    },
    // {
    //   tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
    //   referencia:
    //     'Ministerio del medio ambiente. (s.f.) <em>Política nacional. Gestión integral de residuos de aparatos eléctricos y electrónicos.</em>',
    //   tipo: 'Página <em>web</em>',
    //   link:
    //     'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/e-book_rae_/contenido_2_1_1.html',
    // },
    {
      tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
      referencia:
        'Camacho, E. (2016). <em>Consideraciones generales ara el desensamble.</em> SRI.',
      tipo: 'Presentación',
      descarga: '/downloads/Consideraciones_desensamble_RAEE_Camacho.pdf',
    },
    {
      tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
      referencia:
        'Hernández, C. (2016). <em>Gestión RAEE en Colombia.</em> SRI.',
      tipo: 'Presentación',
      descarga: '/downloads/Gestión_RAEE_Colombia_Hernandez.pdf',
    },
    {
      tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
      referencia:
        'Spitzbart, M. (2016). <em>Introducción al desensamble Manual de RAEE.</em> SRI.',
      tipo: 'Presentación',
      descarga: '/downloads/Introduccion_desensamble_Spitzbart.pdf',
    },
    {
      tema: 'Clasificación de residuos de aparatos eléctricos y electrónicos',
      referencia:
        'ARL Positiva. (2015). <em>Guía de buenas prácticas control de peligros en la manipulación de cargas.</em>',
      tipo: 'Texto',
      link:
        'https://posipedia.com.co/wp-content/uploads/2018/09/guia-buenas-practicas-control-peligro-manipulacion-cargas.pdf',
    },
    {
      tema: 'Normatividad ambiental',
      referencia:
        'Unidad de planeación minero energética. (2017). <em>Normatividad Ambiental y Sanitaria.</em> UPME.',
      tipo: 'Norma',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM1__NORMATIVIDAD_GENERAL',
    },
    // {
    //   tema: 'Riesgo',
    //   referencia:
    //     'RT en Español. (2015). <em>El vertedero electrónico - Documental de RT</em> (Video). YouTube.',
    //   tipo: 'Video',
    //   link: 'https://www.youtube.com/watch?v=lGdgtUDE9TY',
    // },
  ],
  glosario: [
    {
      termino: 'Acumulador',
      significado:
        'Pila reversible que acumula energía durante la carga y la restituye en la descarga.',
    },
    {
      termino: 'Bromado',
      significado: 'm. Quím. Sal del bromo con un metal.',
    },
    {
      termino: 'Cátodo',
      significado: 'm. Fís. Electrodo negativo.',
    },
    {
      termino: 'Chip',
      significado:
        'm. Pequeña pieza de material semiconductor que contiene múltiples circuitos integrados con los que se realizan numerosas funciones en computadoras y dispositivos electrónicos.',
    },
    {
      termino: 'Torx',
      significado: 'Tipo de destornillador en forma de estrella.',
    },
    {
      termino: 'Vertedero',
      significado:
        'm. Conducto por el que se arrojan a un depósito situado a nivel inferior basuras, desechos, ropa sucia, etc.',
    },
  ],
  referencias: [
    {
      referencia: 'ACS RECYCLING (2020). <em>Clasificación de los RAEE.</em>',
      link:
        'https://acsrecycling.es/wp-content/uploads/2020/06/clasificacion-de-los-raee.jpg',
    },
    {
      referencia:
        'ARL Positiva. (2015). <em>Guía de buenas prácticas y control de peligros en la manipulación de cargas.</em>',
      link:
        'https://posipedia.com.co/wp-content/uploads/2018/09/guia-buenas-practicas-control-peligro-manipulacion-cargas.pdf',
    },
    {
      referencia:
        'Camacho, E. (2016). Consideraciones generales ara el desensamble. SRI.',
      link: '',
    },
    {
      referencia: 'PNUMA (s.f.). <em>Convenio de Basilea.</em> [pdf].',
      link:
        'https://www.basel.int/Portals/4/Basel%20Convention/docs/text/BaselConventionText-s.pdf',
    },
    {
      referencia:
        'Real Academia Española. (2020). <em>Diccionario de la lengua española.</em> RAE',
      link: '',
    },
    {
      referencia:
        'Spitzbart, M. (2016). <em>Introducción al desensamble Manual de RAEE.</em> SRI.',
      link: '',
    },
    {
      referencia: 'UPME. (s.f.). Normatividad Ambiental General.',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM1__NORMATIVIDAD_GENERAL',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
