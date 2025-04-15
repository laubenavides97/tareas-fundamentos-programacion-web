// traducciones en español .ingles
const translations = {
    //objeto de idioma español 
    es: {
        title: "Inicio | Cloud Vista Lodge",
        MenuOption1: "Inicio",
        MenuOption2: "Alojamiento",
        MenuOption3: "Amenidades",
        MenuOption4: "Sobre nosotros",
        Boton01: "Reservar",
        T01: "Tu refugio en Santa María de Dota",
        T02: "Agenda tu escapada perfecta",
        T03: "Enclavado entre las montañas de Santa María de Dota, nuestro hotel ofrece una experiencia única de tranquilidad, confort y conexión con la naturaleza. Disfruta de vistas impresionantes, aire puro y una estadía diseñada para renovar cuerpo y mente.",
        Boton02: "Reservar ahora",
        T04: "Nuestro alojamiento",
        T05: "Descubre nuestras habitaciones y nuestras villas",
        T06: "Vive una experiencia única de alojamiento en nuestras acogedoras villas y elegantes suites. Cada espacio combina comodidad, privacidad y una conexión directa con la naturaleza de Santa María de Dota. Ya sea que busques relajarte junto a la chimenea o despertar con una vista espectacular, aquí encontrarás el refugio perfecto en la montaña.",
        Boton03: "Descubrir más",
        T07: "Nuestras actividades",
        T08: "Disfruta tu estadía",
        T09: "En Cloud Vista Lodge, la aventura y la naturaleza te esperan a cada paso. Disfruta de cabalgatas, caminatas guiadas, canopy y recorridos nocturnos bajo las estrellas. Ya sea que busques adrenalina o conexión con el entorno, tenemos la actividad perfecta para ti.",
        T10: "Lo que dicen nuestros huéspedes",
        T11: "Un lugar mágico, perfecto para desconectar y respirar aire puro.",
        T12: "29 años, Costa Rica",
        T13: "La vista desde nuestra villa era simplemente espectacular.",
        T14: "34 años, Argentina",
        T15: "La atención del personal fue cálida y excepcional.",
        T16: "30 años, Alemania",
        T17: "Nos sentimos como en casa, pero rodeados de montañas.",
        T18: "36 años, México",
        T19: "Cada rincón del hotel transmite paz y belleza natural.",
        T20: "22 años, España",
        T21: "Las caminatas guiadas fueron una experiencia inolvidable.",
        T22: "28 años, Estados Unidos",
        T23: "Ideal para una escapada romántica o en familia.",
        T24: "24 años, España",
        T25: "Dormir con el sonido del bosque fue maravilloso.",
        T26: "26 años, Alemania",
        T27: "Volveremos sin duda alguna, superó nuestras expectativas.",
        T28: "31 años, Italia",
        T29: "La chimenea en la habitación fue el toque perfecto.",
        T30: "37 años, Argentina",
        T31: "Santa María de Dota es un paraíso, y este hotel lo complementa perfectamente.",
        T32: "25 años, España",
        T33: "Empieza tu aventura en la montaña",
        T34: "Explora todo lo que Cloud Vista Lodge tiene para ofrecerte y reserva hoy tu estadía. Vive la experiencia de descanso, naturaleza y aventura en el corazón de Santa María de Dota. ¡Tu refugio te espera!",
        F01: "Ubicación",
        F02: "Santa María de Dota, San José, Costa Rica",
        F03: "Contacto",
        F04: "Teléfono: +506 2274-7625",
        F05: "E-mail: info@cloudvista.com",
        F06: "Explora",
        F07: "Alojamiento",
        F08: "Amenidades",
        F09: "Sobre nosotros",
        F10: "Contáctanos",
        F11: "Síguenos",
        F12: "Todos los derechos reservados",
        F13: "Términos y condiciones",
    },
    //objetos de idioma ingles
    en: {
        
    }
};

//funcion para cambiar el idioma

function changeLanguage() {
    //conversion del lenguaje html
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    //cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        //asignacion de atributo data-translate
        const key = element.getAttribute('data-translate');
        //elementos html sean traducidos por la llaves lang - key
        element.innerHTML = translations[lang][key];
    });
}