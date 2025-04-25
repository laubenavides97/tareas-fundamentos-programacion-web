//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
    //declaracion de variables
    // i controla el for 
    //tabcontent controla el contenido de los tabs 
    //tablinks controla los enlaces de los tabs 
    var i, tabcontent, tablinks;

    //obtener todos los elementos con class = "tabcontent" y ocultelos 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //apunta a todos los elemntos con class = "tablinks" y elimina la clase active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks [i].className.replace(" active", "");
    }

    //apunta a todos los elementos con class = "tablinks" y elimina la clase active
    //muestra la pestaña actual y agrega una clase activa al boton que abrio la pestaña
    document.getElementById(info).style.display = "flex";
    evt.currentTarget.className += " active";
}

function renderAlojamiento(alojamiento) {
    alojamiento.forEach(item => {
        const contenedor = document.getElementById(item.id);
        if (!contenedor) return;

        // Construcción de carrusel
        const carruselHTML = `
            <div class="containerCarrusel owl-carousel">
                ${item.imagenes.map(src => `<img src="${src}" alt="" class="imgTabs" />`).join('')}
            </div>
        `;

        // Construcción de amenidades
        const amenidadesHTML = item.amenidades.map(amenidad => `
            <div class="itemAmenidades">
                <div class="iconoTituloAmenidad">
                    ${amenidad.icono}
                    <span class="S2-bold Black">${amenidad.nombre}</span>
                </div>
                <span class="descripcionAmenidad Large Black">${amenidad.contenido}</span>
            </div>
        `).join('');

        // Construcción de descripción general
        const descripcionHTML = `
            <div class="descripcionTab">
                <span class="MiniCaps Blue">${item.nombre}</span>
                <div class="tituloTab">
                    <span class="H1 Black">${item.titulo}</span>
                    <span class="Large Black">${item.descripcion}</span>
                </div>
                <div class="amenidadesTab">
                    <span class="H2 Black">Amenidades</span>
                    <div class="containerAmenidades">
                        ${amenidadesHTML}
                    </div>
                </div>
            </div>
        `;

        // Inyectar todo al contenedor de la sección
        contenedor.innerHTML = carruselHTML + descripcionHTML;
    });
}

renderAlojamiento(alojamiento);

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".tabcontent");
    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "flex" : "none"; // muestra solo el primero
    });
  
    // activa la primera pestaña visualmente (opcional)
    const firstTab = document.querySelector(".tablinks");
    if (firstTab) {
      firstTab.classList.add("active");
    }
  });
  
