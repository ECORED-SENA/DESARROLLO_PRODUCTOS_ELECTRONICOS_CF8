<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de aparatos eléctricos y electrónicos
    
    p.mb-5(data-aos="fade-right") Es común escuchar una clasificación de los aparatos eléctricos y electrónicos utilizando un tipo color: la línea blanca, marrón o gris, y la línea PAE, tal como se observa en la siguiente figura. Estos aparatos eléctricos y electrónicos están clasificados teniendo en cuenta la parte comercial. 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1.
      span Clasificación comercial
    
    .bg-img.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-t1.svg')})`}")
      .col-md-6.col-xl-3.p-2.d-flex
        .tarjeta.p-4.text-center(data-aos="fade-right" style="background-color: #EDEDEE; box-shadow: 3px 6px 6px #00000040")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/t1.png" style="max-width: 142px")
          h4.titulo-cuarto Línea blanca
          p.mb-0 Hornos, frigoríficos, congeladores, campanas extractoras, microondas, aires acondicionados, equipos de calefacción, ventiladores, lavadoras, secadoras y lavaplatos.
      .col-md-6.col-xl-3.p-2.d-flex
        .tarjeta.p-4.text-center(data-aos="fade-right" style="background-color: #DEE4F0; box-shadow: 3px 6px 6px #00000040")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/t2.png" style="max-width: 142px")
          h4.titulo-cuarto Línea gris
          p.mb-0 Ordenadores portátiles y de mesa, Smartphones, Tablets, Impresoras, Faxes y Teclados. 
      .col-md-6.col-xl-3.p-2.d-flex
        .tarjeta.p-4.text-center(data-aos="fade-left" style="background-color: #FFD4A3; box-shadow: 3px 6px 6px #00000040")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/t3.png" style="max-width: 142px")
          h4.titulo-cuarto Línea Marrón
          p.mb-0 Televisores, monitores, radios, reproductores de música, cámaras de foto y vídeo, auriculares, mandos a distancia, equipos de música y altavoces. 
      .col-md-6.col-xl-3.p-2.d-flex
        .tarjeta.p-4.text-center(data-aos="fade-left" style="background-color: #D9F8F2; box-shadow: 3px 6px 6px #00000040")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/t4.png" style="max-width: 142px")
          h4.titulo-cuarto Línea PAE
          p.mb-0 Freidoras, cafeteras, exprimidores, tostadoras, planchas, básculas, máquinas de afeitar, secadores de pelo, aspiradoras y cepillos de dientes eléctricos. 
      .col-12.d-flex.flex-wrap.align-items-center.p-4.my-5(style="background-color: #FBE594")
        .col-12.col-md-3.col-lg-1
          img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador.svg" data-aos="fade-right" style="max-width: 67px")
        p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") Sin embargo, existen dos categorías de aparatos eléctricos y electrónicos, la cual fue establecida por la Unión Europea en el año 2003, en la directiva 2002/96/CE (Parlamento Europeo y el Consejo de la Unión Europea, 2003) La primera de ellas clasifica los aparatos eléctricos y electrónicos en diez categorías de acuerdo con los diferentes tipos; la segunda, por su parte, fue establecida en la directiva 2012/19/UE, de agosto de 2018, y clasifica los aparatos eléctricos y electrónicos en seis categorías considerando las posibles fracciones de recolección y separación de los RAEE.
      .col-12.d-flex.flex-wrap.justify-content-center
        .boton.color-acento-botones.mb-4.col-12.col-lg-4.col-xl-3.me-4.justify-content-center(style="cursor: pointer;" data-aos="fade-right" @click="modal1 = true" @mouseover="mostrarIndicadorAudio = false")
          .indicador--click(v-if="mostrarIndicadorAudio")
          img(src="@/assets/curso/temas/tema1/btn-1.svg"  style="max-width: 39px")
          h3.mb-0.ps-3 1ra clasificación
        .boton.color-acento-botones.mb-4.col-12.col-lg-4.col-xl-3.me-4.justify-content-center(style="cursor: pointer;" data-aos="fade-left" @click="modal2 = true")
          img(src="@/assets/curso/temas/tema1/btn-1.svg" style="max-width: 39px")
          h3.mb-0.ps-3 2da clasificación
      .col-12
        Separador.pb-0

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Residuo
    
    .col-12.d-flex.flex-wrap.align-items-center.p-4.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 85px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") Todo aparato electrónico que entra en desuso se convierte en residuo. Así mismo, también pasa a serlo, aquella parte que sufre daño y necesita ser reemplazada, incluyendo las baterías. Haciendo el ejercicio de revisar por toda la casa y juntar todos los aparatos eléctricos y electrónicos que ya no se utilizan, permite mostrar qué tanto de estos desechos electrónicos tenemos y es necesario disponer para evitar daño ambiental, incluso en algunos casos, a la salud.
        br
        br
        |La siguiente figura es un ejemplo de los residuos que genera un computador.
    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Residuos de un computador
    img.mb-5(src="@/assets/curso/temas/tema1/img-1.svg" data-aos="fade-right")

    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-6.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-2.jpg" data-aos="fade-right" style="max-width: 610px")
      .col-xl-6.ps-xl-4
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
          p Es importante identificar estos residuos para darle la disposición adecuada, muchos de ellos pueden ser separados en otros más pequeños y a su vez clasificar los que resulten peligrosos, los que pueden ser reciclados, reutilizados o transformados.
        .d-flex.flex-wrap.align-items-center(data-aos="fade-left")
          img.col-md-2.mb-4.mx-auto.my-md-auto.ms-md-0.me-md-auto(src="@/assets/curso/temas/tema1/decorador-2.jpg" style="max-width: 85px")
          p.col-md-10.mb-0 Algunos elementos electrónicos poseen metales escasos, a los cuales es importante darle la disposición adecuada para que puedan ser recuperados, tal como se presenta en la siguiente figura.
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Metales escasos en un teléfono móvil
    img(src="@/assets/curso/temas/tema1/img-3.svg" data-aos="fade-right")
    p.p-4.px-xl-5.mb-0(style="background-color: #F6F6F6;" data-aos="fade-right") La extracción de estos materiales puede resultar costosa, es por eso que muchas empresas dedicadas a la gestión de residuos electrónicos, necesitan manejar cierto volumen para que se pueda generar una utilidad.
    .d-flex.flex-wrap.align-items-center.mb-5.p-3(style="background-color: #94EADA;" data-aos="fade-left")
      img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-3.svg" style="max-width: 48px")
      p.col-lg-11.mb-0 Desde el hogar lo importante es identificar las líneas de producción para que estos residuos puedan tener un destino donde no resulte perjudicial para el medio ambiente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Equipamiento
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        h4 Contenedores para separar residuos
        br
        br
        p.mb-0  Si se pretende trabajar con la gestión de residuos, es importante contar con algunas herramientas, si solo se le va a dar tratamiento primario para mandar a disposición, es probable que se requieran pocas de estas. Para desensamblar residuos de aparatos eléctricos y electrónicos, es probable que se necesite desde un simple destornillador hasta una cortadora eléctrica; también es necesario contar con contenedores para clasificar los componentes por separados. 

    .bg-img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-t1-2.svg')})`}")
      p.mb-5(data-aos="fade-right") En términos generales, se necesitarán las mismas herramientas utilizadas para cualquier trabajo electrónico; las más comunes son: #[b(style="color: #A50491") destornilladores de diferentes tipos y dimensiones (Pala, Estrella, Hexa, Torx, etc.) pinzas, cautín, llaves de diferentes dimensiones y segueta.] En cuanto a equipos se necesitarán algunos adicionales, si el propósito es separar materiales; esto dependerá del tipo de trabajo a realizar en la separación. Si se va a extraer el oro de los chips, por su parte, será necesario contar con productos químicos, pero este trabajo ya está destinado a empresas debidamente autorizadas.
      Separador.w-100
      .titulo-segundo.color-acento-contenido
        h2#t_1_3 1.3 Ética
      
      .d-flex.flex-wrap.mb-5
        .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
          p(data-aos="fade-right") El manejo ético en la gestión de residuos de aparatos electrónicos es un tema a tener muy en cuenta. Es común apreciar la mala disposición de estos elemento, solo por no importar lo que pase al medio ambiente y a los demás, muchas veces el interés se centra en obtener un beneficio económico; por ejemplo, en grandes ciudades muchas veces se aprecia la quema de cables para separar el plástico y los componentes de protección del cable, y así quedarse solo con el cobre y poder venderlo, los humos emanados son muy tóxicos y generan daño a la comunidad.
          .cajon.color-secundario.p-4.d-flex.flex-wrap(style="background-color: #EFDBEF" data-aos="fade-right")
            img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-4.svg" style="max-width: 70px")
            .col-md-11.ps-lg-4
              h4 Vertedero tecnológico
              p Algunos países con población de muy bajos recursos, reciben donaciones de equipos de cómputo de otros países que ya no los usan, para ser usados en las escuelas. El tratamiento que le dan es el de desarmarlos para obtener algunas ganancias vendiendo las partes y desechando en vertederos aquellas que no representan ningún valor.
        img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-5.jpg" data-aos="fade-left" style="max-width: 400px")
      p(data-aos="fade-right") De ahí la #[b(style="color: #A50491") importancia de acoger y seguir las regulaciones ambientales para hacer una buena gestión de estos componentes.] Cada país emite sus propias regulaciones, algunos no las tienen pero el medio ambiente es común para todos. Un daño hecho en algún lugar, puede afectar a todo el planeta.
      Separador.w-100
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Elementos de marca
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        p(data-aos="fade-right") Los equipos de marca tienen más materiales para recuperar. Es posible que muchos de sus elementos sean reutilizables y sirvan para repuestos de otros dispositivos con las mismas características, incluso pueden ser vendidos en el comercio. Esta es una de las medidas más benéficas de la gestión de los RAEE.
        .cajon.color-primario.p-4.d-flex.flex-wrap.mb-4(data-aos="fade-right")
          img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-5.svg" style="max-width: 70px")
          .col-md-11.ps-lg-4
            p También es común que los elementos de marca utilicen materiales de alta calidad para su fabricación; es así como la mayoría de los chips electrónicos tienen sus contactos enchapados en oro para mejorar la conductividad y evitar la oxidación.
        p(data-aos="fade-right") En términos generales, los elementos de marca son los más apetecidos por las empresas recaudadoras de residuos electrónicos ya que estos poseen pocos elementos para gestión final y la mayoría son reutilizables, y en algunos casos reciclables.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-6.jpg" data-aos="fade-left" style="max-width: 400px")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Corrientes de materiales recuperados
    
    p.mb-5(data-aos="fade-right") Es posible dividir los residuos obtenidos en el desensamble de un producto electrónico en diferentes corrientes, dependiendo del tratamiento que se le vaya a dar. En la siguiente figura se presenta un posible flujo de estos elementos desde el momento de la recolección.

    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Flujograma
    
    img(src="@/assets/curso/temas/tema1/img-7.svg" data-aos="fade-right")
    p.px-3.py-2.text-center.mb-5(style="background-color: #F3F9FF") Nota: Tomado de Spitzbart M. (2016)

    .d-flex.flex-wrap.mb-4
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        p(data-aos="fade-right") Lo primero a tener en cuenta, cuando se quiere hacer una buena disposición de residuos, es separar aquellos componentes que resulten peligrosos para el medio ambiente o la salud de las personas, como ya se ha mencionado. El plástico en los cables, el mercurio en algunos elementos, como los tubos fluorescentes, por ejemplo, son de mucho cuidado para su disposición, porque el mercurio es altamente tóxico.
        .cajon.color-secundario.p-4.d-flex.flex-wrap(style="background-color: #EFDBEF" data-aos="fade-right")
          img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-6.svg" style="max-width: 55px")
          .col-md-11.ps-lg-4
            p Los condensadores electrolíticos también tienen en su interior aceites dieléctricos que pueden ser de tratamiento especial, sobre todo si están estallados.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-8.jpg" data-aos="fade-left" style="max-width: 400px")

    p.mb-5(data-aos="fade-right") Los monitores de Tubos de Rayos Catódicos (TRC) son quizás el componente de más cuidado para tratar, aunque ya están en desuso, precisamente por lo peligroso que resultaba. Aún es posible encontrar en algunos hogares, equipos que incorporen esta tecnología; con el tiempo ya no será posible encontrar estos dispositivos, pero hay que tenerlos en cuenta:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-right")
      .tarjeta.p-4.p-xl-5(style="background-color: #F5D0F0" titulo="Monitor de TCR (Tubo de rayos catódicos)")
        h4 Monitor de TCR (Tubo de rayos catódicos)
        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img-9.jpg")
          figcaption.text-center Nota. Tomado de Spitzbart, M. (2016).
        .tarjeta.col-12.d-flex.flex-wrap.align-items-center.p-4(style="background-color: #FFD947")
          .col-12.col-md-3.col-lg-1
            img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-7.svg" style="max-width: 40px")
          p.col.mb-0.col-md-9.col-lg-11.ps-lg-4 La mayoría de los componentes del monitor TRC son para disposición final, por lo que no resulta muy atractivo para las empresas procesadoras de RAEE que quieren obtener algún beneficio. 
      .tarjeta.p-4.p-xl-5(style="background-color: #F5D0F0" titulo="Monitor tipo TCR")
        h4 Monitor tipo TCR
        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img-10.jpg")
          figcaption.text-center Nota. Tomado de Spitzbart, M. (2016). 
        .tarjeta.col-12.d-flex.flex-wrap.align-items-center.p-4(style="background-color: #FFD947")
          .col-12.col-md-3.col-lg-1
            img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-7.svg" style="max-width: 40px")
          p.col.mb-0.col-md-9.col-lg-11.ps-lg-4 Cuando se habla de disposición final es porque ese elemento ya no puede ser reutilizado ni reciclado y por lo tanto hay que proceder a disponerlo según la normatividad, muchas veces esa disposición acarrea en costos.

    p.p-3.p-xl-4(style="background-color: #E8E8E8" data-aos="fade-right") Ahora bien, muchos elementos de los aparatos electrónicos, son de mucho provecho, existen verdaderos artistas que hacen maravillas con estos materiales; es así como las bandejas de los hornos microondas son de mucha aplicabilidad, los motores de las impresoras, los rieles, los imanes de neodimio en los discos duros, etc., son productos que se pueden reutilizar para crear nuevos diseños.

    ModalA(:abrir-modal.sync="modal1")
      .d-flex.flex-wrap.bg-img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-t1.svg')})`}")
        .titulo-quinto.color-acento-contenido.mx-auto
          h4 Clasificación de los Aparatos Eléctricos, 2012/96/UE del parlamento Europeo
        img.mb-4(src="@/assets/curso/temas/tema1/modal-1.svg")
        TarjetaAudio.col-12.col-md-6.mx-auto.color-acento-botones.mb-3(
          texto=""
          :audio="require('@/assets/curso/temas/tema1/audio.wav')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    ModalA(:abrir-modal.sync="modal2")
      .d-flex.flex-wrap.bg-img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-t1.svg')})`}")
        .titulo-quinto.color-acento-contenido.mx-auto
          h4 Clasificación de los Aparatos Eléctricos, 2012/16/UE del parlamento Europeo
        img.mb-4(src="@/assets/curso/temas/tema1/modal-2.svg")
        .tarjeta.col-12.d-flex.flex-wrap.align-items-center.p-2.col-xl-9.mx-auto(style="background-color: #FAE69D")
          .col-12.col-md-3.col-lg-1
            img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/decorador-3.svg" style="max-width: 24px")
          p.col.mb-0.col-md-9.col-lg-11.ps-lg-4 Esta clasificación está más orientada hacia la gestión de los residuos de los aparatos eléctricos y electrónicos.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicadorAudio: true,
    modal1: false,
    modal2: false,
    mostrarIndicadorTarjetaAudio: true,
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
.bg-img
  display: flex
  flex-wrap: wrap
  align-items: stretch
  margin-right: -3rem
  margin-left: -3rem
  padding-right: 3rem
  padding-left: 3rem
  width: calc(100% + 6rem)
  background-repeat: no-repeat
  background-position-y: 10%
</style>
