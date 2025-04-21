

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  cargarSeccionAmenidades(infoHotel.amenidades.categorias);
  cargarSeccionActividades(infoHotel.actividades.categorias);
  agregarCalculadora(infoHotel.actividades);
});

// Función para generar HTML de amenidades usando insertAdjacentHTML
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

// Función para generar HTML de actividades usando insertAdjacentHTML
function cargarSeccionActividades(categorias) {
  const seccion = document.getElementById("contenedorActividades");
  let html = '';
  categorias.forEach(cat => {
    html += `
      <div class="contenedorSub" id="${cat.id}">
        <span class="tituloSub Black H1">${cat.categoria}</span>
        <div class="contenedorCardsSub">
          ${cat.contenido.map(item => `
            <div class="cardActividad" id="${item.id}">
              <img src="${item.foto}" alt="${item.titulo}" class="imgBorde">
              <div class="contDescipcionAmenidad">
                <span class="S2-bold Black">${item.titulo}</span>
                <span class="Large Black">${item.descripcion}</span>
                <div class="contenedorPrecio">
                  ${item.precio.icono}
                  <span class="Large DarkGray">${item.precio.monto}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  // Agrega las subsecciones y preserva el banner y la calculadora (que se reubica después)
  seccion.insertAdjacentHTML('beforeend', html);
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
