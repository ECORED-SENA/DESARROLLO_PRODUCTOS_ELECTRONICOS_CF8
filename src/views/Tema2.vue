<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación de residuos de aparatos eléctricos y electrónicos
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        p Los residuos de aparatos eléctricos y electrónicos se pueden clasificar dependiendo de su destino final. En el proceso inicial de separación, se determinan algunas características, lo que hace más fácil la separación. El mercado de reciclaje para las fracciones de RAEE es muy cambiante, el reuso y otras áreas pueden ser muy provechosas.
        .cajon.color-primario.p-4.d-flex.flex-wrap
          img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema2/decorador.svg" style="max-width: 70px")
          .col-md-11.ps-lg-4
            p Las empresas dedicadas a la gestión de residuos buscan sacar el máximo provecho de los artículos obtenidos, ideando nuevos productos con las partes para poderlos reutilizar y reciclar. Hay que tener en cuenta, que muchos residuos, aunque parezcan a simple vista que son reciclables, los procesos pueden ser muy complejos y por lo tanto ya no se hacen atractivos. Tal es el caso de los plásticos en los equipos portátiles, pues estos están mezclados con elementos retardantes del fuego, los llamados BRF (Retardante de llama Bromados), por su siglas en inglés, y separarlos puede resultar costoso, por lo que ya este tipo de plásticos requiere de otro tratamiento.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-1.jpg" style="max-width: 400px")
    .col-xl-10.mx-auto
      .titulo-sexto.color-acento-contenido
        h5 Figura 5.
        span Equipos con plásticos que incluyen BRF.
      
      img.d-none.d-md-block(src="@/assets/curso/temas/tema2/img-2.jpg")
      img.d-block.d-md-none(src="@/assets/curso/temas/tema2/img-2-movil.jpg")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Separación y clasificación de residuos según sus características
    
    p.mb-5 Existen varias maneras de separar los elementos eléctricos y electrónicos. A continuación se presentan dos de ellas.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-6.order-2.order-xl-1
        LineaTiempoD.color-primario.linea-tiempo-edit
          .d-block(numero="A" titulo="Separación tradicional")
            p.text-small La forma más común, de separación de componentes, se hace de la siguiente manera:
            ul
              li.d-flex.align-items-start
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 Separación de aparatos reusables.
              li.d-flex.align-items-start
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 Descontaminación: remoción segura y disposición controlada de componentes peligrosos.
              li.d-flex.align-items-start
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 Proveer materiales valorizables (como metales preciosos, metales de tierras raras) para recuperación sin pérdidas.
              li.d-flex.align-items-start
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 Acondicionamiento adecuado de materiales contenidos en aparatos electrónicos para posterior reciclaje mecánico /aprovechamiento de materiales.


          .d-block(numero="B" titulo="Separación por niveles")
            p.text-small Esta clasificación también se hace por niveles:
            ul
              li.d-flex.align-items-start.mb-4
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 #[b Nivel A.] Sólo se retiran componentes peligrosos y componentes de alto valor, como tarjetas de circuito impreso; las partes restantes se envían a separación mecánica / reciclaje.
              li.d-flex.align-items-start.mb-4
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 #[b Nivel B.] Además de remover componentes peligrosos, el desensamble manual de componentes en materiales más o menos puros y fracciones reciclables se realiza si es viable con un esfuerzo razonable.
              li.d-flex.align-items-start.mb-4
                <svg style="width: 9px; min-width: 9px; margin-top: .2rem" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="8.621" height="14.674" viewBox="0 0 8.621 14.674">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M8.385,6.763,1.856.234A.8.8,0,0,0,.725.23l0,0L.24.715a.8.8,0,0,0,0,1.131l0,0L5.722,7.332.234,12.82a.8.8,0,0,0,0,1.131l0,0,.481.481a.8.8,0,0,0,1.131,0l0,0L8.385,7.9a.81.81,0,0,0,0-1.139Z" transform="translate(0.002 0.002)" fill="#a50491"/>
                  </g>
                </svg>
                p.mb-0.ps-2 #[b Nivel C.] Los aparatos se desensamblan hasta un punto en el cual la separación en materiales puros no es posible sin un triturado mecánico.
      img.col-xl-6.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-3.jpg" style="max-width: 610px")

    p.mb-5 Ahora bien, una vez se ha realizado el proceso de separación, se procede a ordenarlos. La siguiente figura muestra una clasificación de las fracciones resultantes al separar los componentes de la mayoría de los equipos electrónicos.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 6.
        span Clasificación de elementos obtenidos.
      .d-flex.flex-wrap.p-4.edit-bg-t2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg.jpg')})`}"
      )
        SlyderF.col-12.col-lg-8.my-auto.order-2.order-lg-1(columnas="col-12 col-xl-6")
          .tarjeta.color-acento-botones.p-3(style="background-color: #D9F8F2")
            .row.justify-content-center
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-1.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Fracciones peligrosas
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Tubos CRT
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Baterías
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Baterías mezcladas
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Acumuladroes
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Ácido-Plomo
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Baterías de Ion-Litio
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Condensadores
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Cartuchos de impresora
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Pantallas LCD (mercurio)

          .tarjeta.color-acento-botones.p-4.py-xl-2(style="background-color: #D9F8F2")
            .row.justify-content-center.mb-3
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-2.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Plásticos
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") SinPlásticos con retardantes (BFRs)
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") BRs
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Otros: PC-ABS / PP / ABS / PS / HIPS
          .tarjeta.color-acento-botones.p-4.py-xl-2(style="background-color: #D9F8F2")
            .row.justify-content-center.mb-3
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-3.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Metales Fe y NF
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Chatarra
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Hierro
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Acero inoxidable
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Cobre
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Aluminio
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Latón
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Níquel
          .tarjeta.color-acento-botones.p-4.py-xl-2(style="background-color: #D9F8F2")
            .row.justify-content-center.mb-3
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-4.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Otro no metales
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Residuo remanente
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Vidrio
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Madera
          .tarjeta.color-acento-botones.p-4.py-xl-2(style="background-color: #D9F8F2")
            .row.justify-content-center.mb-3
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-5.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Tarjetas de circuito impreso
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") CI Grado Integración alto
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") CI Grado medio
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") CI Grado bajo
          .tarjeta.color-acento-botones.p-4.py-xl-2(style="background-color: #D9F8F2")
            .row.justify-content-center.mb-3
              .col-8
                img.mx-auto(src='@/assets/curso/temas/tema2/sl-6.svg' style="max-width: 95px")
            p.mb-0.fw-bold.text-center.mb-2 Fracciones mezcladas
            ul.mb-0
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Chatarra mezclada
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Motores
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Inductores
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Transformadores
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Bobinas
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Deflectoras
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Drives
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") Disco duro
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2 Fuentes de poder
              li.d-flex.align-items-center
                <svg style="width: 9px; min-width: 9px" id="Grupo_944" data-name="Grupo 944" xmlns="http://www.w3.org/2000/svg" width="6.692" height="11.391" viewBox="0 0 6.692 11.391">
                  <g id="Grupo_423" data-name="Grupo 423">
                    <path id="Trazado_635" data-name="Trazado 635" d="M6.508,5.249,1.44.181a.621.621,0,0,0-.878,0l0,0L.186.555a.621.621,0,0,0,0,.878l0,0L4.441,5.691.181,9.951a.621.621,0,0,0,0,.878l0,0,.373.373a.621.621,0,0,0,.878,0l0,0L6.508,6.132a.629.629,0,0,0,0-.884Z" transform="translate(0.002 0.002)" fill="#00cca7"/>
                  </g>
                </svg>
                p.mb-0.ps-2(style="font-size: 14px") LED
        img.col-lg-4.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2.banner-principal-decorativo-1.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="right: 0; max-width: 300px")

    p.mb-5 Es importante contar con recipientes para el almacenamiento de estos materiales, en algunos casos será necesario usar empaques para los elementos que lo requieran, por ejemplo, bolsas antiestáticas para tarjetas sensibles a este fenómeno físico.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Disposición final de residuos peligrosos
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        p Cuando se habla de disposición final de residuos, es porque ya no hay nada más que hacer con ellos, esta es quizás la frase que no quiere escuchar una empresa dedicada a procesar residuos electrónicos y que espera obtener alguna ganancia. Esta disposición final, muchas veces hace incurrir en gastos extras. Por ejemplo, el tubo de rayos catódicos de un monitor, contiene fósforo en polvo, mercurio y otras sustancias peligrosas, por norma general deben ser dispuestos sin que causen daños al medio ambiente, no son aprovechables, y los costos de transporte y almacenamiento son excesivos.
        .cajon.color-secundario.p-4.d-flex.flex-wrap(style="background-color: #EFDBEF")
          img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 70px")
          .col-md-11.ps-lg-4
            p Los condensadores electrolíticos contienen compuestos inorgánicos, ácidos orgánicos con diversos disolventes y aditivos anticorrosivos, sustancias que pueden contaminar el agua, por lo que se les considera elementos peligrosos.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-5.jpg" style="max-width: 400px")

    p.mb-5 Para la disposición final de estos materiales se requiere seguir los lineamientos dispuestos. El convenio de Basilea sobre #[em.fw-bold(style="color: #A50491") El control de los movimientos transfronterizos de los desechos peligrosos y su eliminación] dictamina algunos procedimientos a seguir, como se presenta en la siguiente figura.


    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 7.
        span Disposición final
      .d-flex.flex-wrap.p-4.edit-bg-t2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      )
        .col-lg-7.order-2.order-lg-1
          h4.mb-4.texto-blanco ¿Qué hacer con los condensadores PCB y los condensadores electrolíticos que superan el criterio de la directiva RAEEE de la Unión Europea?
          .col-lg-10.mx-auto
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/decorador-2.svg' style="max-width: 70px")
              .tarjeta(style="margin-left: -13%; background-color: #FDF2C8; border: 2px solid #FFD947")
                .p-3
                  p.mb-0 Incineración con alta temperatura para residuos peligrosos en espacios adecuados para ello.
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/decorador-3.svg' style="max-width: 70px")
              .tarjeta(style="margin-left: -13%; background-color: #FDF2C8; border: 2px solid #FFD947")
                .p-3
                  p.mb-0 Disposición final en relleno de seguridad.
        img.col-lg-5.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2.banner-principal-decorativo-1.position-relative(src="@/assets/curso/temas/tema2/img-6.svg" style="right: 0; max-width: 300px")
    p.mb-5 A los acumuladores y baterías pequeñas, por su parte, se les debe hacer un tratamiento especial para su disposición final. #[b(style="color: #A50491") Es importante que se les dé un uso adecuado ya que estas contienen sustancias que resultan perjudiciales para el medio ambiente y la salud.]

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Clasificación de los acumuladores según convenio de Basilea
    
    .tabla-b.color-primario.mb-5
      .tabla-b__header
        h4.text-start.mb-0(style="color: black") Niveles del lenguaje
      table
        tr
          th A1160
          td Acumuladores de plomo de desecho, enteros o triturados.
        tr
          th A1170
          td Acumuladores de desecho sin seleccionar excluidas mezclas de acumuladores sólo de las lista B. Los acumuladores de desecho no incluidos en la lista B que contengan constituyentes del anexo I en tal grado que los conviertan en peligrosos.
      .tabla-b__header
        h4.text-start.mb-0(style="color: black") Lista B
      table
        caption(style="font-weight: normal") #[b Nota:] Adaptado de PNUMA 
        tr
          th B1090
          td Baterías de desecho que se ajusten a una especificación, con exclusión de los fabricados con plomo, cadmio o mercurio.
    
    .cajon.color-primario.p-4.d-flex.flex-wrap
      img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema2/decorador-4.svg" style="max-width: 70px")
      .col-md-11.ps-lg-4
        p En Colombia existen algunas regulaciones para la disposición final de los acumuladores, entre las que se encuentran: la Resolución 372 de 2009. "Por la cual se establecen los elementos que deben contener los Planes de Gestión de Devolución de Productos Posconsumo de Baterías Usadas Plomo Ácido, y se adoptan otras disposiciones" y el Decreto 4741 de 2005. "Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral".

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.edit-bg-t2
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  border-radius: 26px
  position: relative
.slyder-f
  .slyder-f__main .horizontal-scroll
    display: flex
    align-items: stretch !important
    height: 100%
    .slyder-f__slyde
      display: flex
      .tarjeta
        width: 100%
  .slyder-f__btn
    background-color: #FFD947
    height: 30px
    max-width: 30px
    border-radius: 50%
    margin: auto
    i
      font-size: 16px
    .fa-chevron-left:before
      margin-left: .8rem
    .fa-chevron-right:before
      margin-right: .8rem
.linea-tiempo-edit
  .linea-tiempo-d__item__content
    transition: all .3s linear
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__number
      background-color: #F5D0F0 !important
      color: black !important
    .linea-tiempo-d__item__content
      background-color: #F5D0F0 !important
</style>
