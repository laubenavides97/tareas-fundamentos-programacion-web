const infoHotel = 
{
  amenidades: {
    id: "secAmenidades",
    categorias: [
      {
        id: "CatAmenidad01",
        categoria: "Relajación",
        contenido: [
          {
            id: "Relajacion01",
            foto: "../MEDIA/amenidad01.png",
            titulo: "Spa",
            descripcion: "Servicios de masajes relajantes con terapeutas profesionales, disponibles previa cita."
          },
          {
            id: "Relajacion02",
            foto: "../MEDIA/amenidad02.png",
            titulo: "Zona de lectura",
            descripcion: "Un espacio tranquilo con vista a las montañas y una selección de libros para relajarte en completa paz."
          },
          {
            id: "Relajacion03",
            foto: "../MEDIA/amenidad03.png",
            titulo: "Área de descanso",
            descripcion: "Espacio con hamacas perfecto para desconectar bajo los árboles o disfrutar de una siesta al ritmo del bosque."
          }
        ]
      },
      {
        id: "CatAmenidad02",
        categoria: "Salud",
        contenido: [
          {
            id: "Salud01",
            foto: "../MEDIA/amenidad04.png",
            titulo: "Senderos",
            descripcion: "Rutas señalizadas ideales para paseos tranquilos mientras respiras aire puro y conectas con el entorno."
          },
          {
            id: "Salud02",
            foto: "../MEDIA/amenidad05.png",
            titulo: "Piscina",
            descripcion: "Ideal tanto para un baño reparador como para mantenerte activo durante tu estadía."
          },
          {
            id: "Salud03",
            foto: "../MEDIA/amenidad06.png",
            titulo: "Gimnasio",
            descripcion: "Mantené tu rutina de ejercicio durante tu estadía con nuestro gimnasio."
          }
        ]
      },
      {
        id: "CatAmenidad03",
        categoria: "Alimentación",
        contenido: [
          {
            id: "Alimentacion01",
            foto: "../MEDIA/amenidad07.png",
            titulo: "Restaurante",
            descripcion: "Cocina costarricense con ingredientes locales y platos preparados al momento, en un ambiente cálido y acogedor."
          },
          {
            id: "Alimentacion02",
            foto: "../MEDIA/amenidad08.png",
            titulo: "Bar",
            descripcion: "Bebidas artesanales, vinos seleccionados y cocteles especiales, ideales para disfrutar al atardecer o después de un día de aventura."
          },
          {
            id: "Alimentacion03",
            foto: "../MEDIA/amenidad09.png",
            titulo: "Servicio a la habitación",
            descripcion: "Degustá tus platillos favoritos desde la comodidad de tu alojamiento."
          }
        ]
      }
    ]
  },
  actividades: {
    id: "secActividades",
    categorias: [
      {
        id: "CatActividad01",
        categoria: "Naturaleza y aventura",
        contenido: [
          {
            id: "Naturaleza01",
            foto: "../MEDIA/actividad01.png",
            titulo: "Cabalgata",
            descripcion: "Recorre paisajes únicos a caballo y disfruta de vistas espectaculares.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡18,000 por persona",
              valor: "18000"
            }
          },
          {
            id: "Naturaleza02",
            foto: "../MEDIA/actividad02.png",
            titulo: "Caminata guiada",
            descripcion: "Sumergite en la riqueza natural del bosque nuboso con un guía experto.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡12,000 por persona",
              valor: "12000"
            }
          },
          {
            id: "Naturaleza03",
            foto: "../MEDIA/actividad03.png",
            titulo: "Canopy",
            descripcion: "Viví la adrenalina de deslizarte por tirolesas sobre el bosque y el valle.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡25,000 por persona",
              valor: "25000"
            }
          },
          {
            id: "Naturaleza04",
            foto: "../MEDIA/actividad04.png",
            titulo: "Observación de aves",
            descripcion: "Descubrí especies únicas en su hábitat natural con binoculares y el acompañamiento de un guía.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡10,000 por persona",
              valor: "10000"
            }
          },
          {
            id: "Naturaleza05",
            foto: "../MEDIA/actividad05.png",
            titulo: "Senderismo al Cerro Buena Vista",
            descripcion: "Una caminata desafiante para los amantes de la aventura, con vistas desde uno de los puntos más altos de la región.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡15,000 por persona",
              valor: "15000"
            }
          }
        ]
      },
      {
        id: "CatActividad02",
        categoria: "Actividades especiales",
        contenido: [
          {
            id: "Especiales01",
            foto: "../MEDIA/actividad06.png",
            titulo: "Caminata nocturna",
            descripcion: "Explorá el bosque al anochecer y descubrí la vida silvestre que solo se deja ver bajo la luz de la luna.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡13,000 por persona",
              valor: "13000"
            }
          },
          {
            id: "Especiales02",
            foto: "../MEDIA/actividad07.png",
            titulo: "Fogata bajo las estrellas",
            descripcion: "Disfrutá de una noche mágica con marshmallows, historias locales y el cielo estrellado como telón de fondo.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "Gratis",
              valor: "0"
            }
          },
          {
            id: "Especiales03",
            foto: "../MEDIA/actividad08.png",
            titulo: "Sesión de yoga al amanecer",
            descripcion: "Conectá cuerpo y mente con una clase de yoga guiada al aire libre, mientras el sol aparece entre las montañas.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡10,000 por persona",
              valor: "10000"
            }
          }
        ]
      },
      {
        id: "CatActividad03",
        categoria: "Cultura y gastronomía",
        contenido: [
          {
            id: "Cultura01",
            foto: "../MEDIA/actividad09.png",
            titulo: "Degustación de vinos locales",
            descripcion: "Probá una selección de vinos costarricenses en una cata dirigida que destaca lo mejor de la producción local.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡20,000 por persona",
              valor: "20000"
            }
          },
          {
            id: "Cultura02",
            foto: "../MEDIA/actividad10.png",
            titulo: "Clase de cocina típica",
            descripcion: "Aprendé a preparar platos tradicionales con ingredientes frescos y técnicas autóctonas junto a un chef local.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡16,000 por persona",
              valor: "16000"
            }
          },
          {
            id: "Cultura03",
            foto: "../MEDIA/actividad11.png",
            titulo: "Visita a artesanos locales",
            descripcion: "Conocé el trabajo de talentosos artesanos y llevate un recuerdo único hecho a mano.",
            precio:
            {
              icono: '<span class="material-symbols-light--money-bag-outline"></span>',
              monto: "₡8,000 por persona",
              valor: "8000"
            }
          }
        ]
      }
    ]
  }
};
