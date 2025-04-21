let categoriasOriginales = []; 

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  categoriasOriginales = infoHotel.actividades.categorias;
  cargarSeccionAmenidades(infoHotel.amenidades.categorias);
  cargarSeccionActividades(infoHotel.actividades.categorias);
  agregarCalculadora(infoHotel.actividades);
  configurarBuscador();
});

// Función para generar HTML de amenidades
function cargarSeccionAmenidades(categorias) {
  const seccion = document.getElementById("contenedorAmenidades");
  let html = '';
  categorias.forEach(cat => {
    html += `
      <div class="contenedorSub" id="${cat.id}">
        <span class="tituloSub Black H1">${cat.categoria}</span>
        <div class="contenedorCardsSub">
          ${cat.contenido.map(item => `
            <div class="cardAmenidad" id="${item.id}">
              <img src="${item.foto}" alt="${item.titulo}" class="imgBorde">
              <div class="contDescipcionAmenidad">
                <span class="S2-bold Black">${item.titulo}</span>
                <span class="Large Black">${item.descripcion}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  // Agrega las subsecciones preservando el banner inicial
  seccion.insertAdjacentHTML('beforeend', html);
}

// Función para generar HTML de actividades
function cargarSeccionActividades(categorias) {
  const seccionActividades = document.getElementById("contenedorActividades");
  seccionActividades.innerHTML = ""; // Limpiar antes de renderizar

  categorias.forEach((cat) => {
    const actividadesFiltradas = cat.contenido;
    if (actividadesFiltradas.length === 0) return;

    const contenedorSub = document.createElement("div");
    contenedorSub.classList.add("contenedorSub");

    const tituloSub = document.createElement("span");
    tituloSub.classList.add("tituloSub", "Black", "H1");
    tituloSub.textContent = cat.categoria;
    contenedorSub.appendChild(tituloSub);

    const contenedorCards = document.createElement("div");
    contenedorCards.classList.add("contenedorCardsSub");

    actividadesFiltradas.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("cardActividad");

      const img = document.createElement("img");
      img.src = item.foto;
      img.alt = item.titulo;
      img.classList.add("imgBorde");

      const contDescripcion = document.createElement("div");
      contDescripcion.classList.add("contDescipcionAmenidad");

      const nombre = document.createElement("span");
      nombre.classList.add("S2-bold", "Black");
      nombre.textContent = item.titulo;

      const descripcion = document.createElement("span");
      descripcion.classList.add("Large", "Black");
      descripcion.textContent = item.descripcion;

      const contPrecio = document.createElement("div");
      contPrecio.classList.add("contenedorPrecio");

      const spanIcono = document.createElement("span");
      spanIcono.innerHTML = item.precio.icono;

      const monto = document.createElement("span");
      monto.classList.add("Large", "DarkGray");
      monto.textContent = item.precio.monto;

      contPrecio.append(spanIcono, monto);
      contDescripcion.append(nombre, descripcion, contPrecio);
      card.append(img, contDescripcion);
      contenedorCards.appendChild(card);
    });

    contenedorSub.appendChild(contenedorCards);
    seccionActividades.appendChild(contenedorSub);
  });
}

// Función para el buscador
function configurarBuscador() {
  const inputBuscador = document.getElementById("buscadorActividades");
  const mensajeSinResultados = document.getElementById("mensajeSinResultados");

  inputBuscador.addEventListener("input", () => {
    const texto = inputBuscador.value.toLowerCase();

    const categoriasFiltradas = categoriasOriginales.map((cat) => {
      const actividadesCoinciden = cat.contenido.filter((item) =>
        item.titulo.toLowerCase().includes(texto) ||
        item.descripcion.toLowerCase().includes(texto)
      );
      return {
        ...cat,
        contenido: actividadesCoinciden,
      };
    }).filter((cat) => cat.contenido.length > 0);

    // Mostrar u ocultar mensaje
    if (categoriasFiltradas.length === 0) {
      mensajeSinResultados.style.display = "block";
    } else {
      mensajeSinResultados.style.display = "none";
    }

    cargarSeccionActividades(categoriasFiltradas);
  });
}


// Función para poblar la calculadora
function agregarCalculadora(actividades) {
  const select = document.getElementById('actividadSelect');
  let options = '<option value="" disabled selected>Selecciona la actividad</option>';
  actividades.categorias.forEach(cat => {
    cat.contenido.forEach(item => {
      options += `<option value="${item.id}">${item.titulo}</option>`;
    });
  });
  select.innerHTML = options;
}

// Cálculo de precio total
function calcularPrecio() {
  const actividadId = document.getElementById('actividadSelect').value;
  const personas = Number(document.getElementById('cantidadPersonas').value);
  if (!actividadId || personas < 1) return;

  const allActs = infoHotel.actividades.categorias.flatMap(c => c.contenido);
  const act = allActs.find(a => a.id === actividadId);
  const precioUnit = Number(act.precio.valor);

  document.getElementById('imgActividad').src = act.foto;
  document.getElementById('montoPersona').textContent = precioUnit.toLocaleString();
  document.getElementById('numParticipantes').textContent = personas;
  document.getElementById('totalCRC').textContent = (precioUnit * personas).toLocaleString();
}

document.getElementById("categoria").addEventListener("change", function () {
  const valor = this.value;
  document.getElementById("secAmenidades").style.display = valor === "amenidades" ? "block" : "none";
  document.getElementById("secActividades").style.display = valor === "actividades" ? "block" : "none";
});
