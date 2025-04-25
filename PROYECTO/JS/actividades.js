document.addEventListener('DOMContentLoaded', () => {
  renderizarActividades(infoHotel.actividades);

  const continuarBtn = document.getElementById("btn-continuar");
  if (continuarBtn) {
    continuarBtn.addEventListener("click", () => {
      agruparActividadesSeleccionadas();
      window.location.href = "checkout.html"; // O mostrarReserva.html según el nombre real
    });
  }
});

function renderizarActividades(actividades) {
  const contenedor = document.getElementById("contenedor-actividades");
  contenedor.innerHTML = "";

  actividades.categorias.forEach(categoria => {
    categoria.contenido.forEach(actividad => {

      const id = actividad.id;
      const localStorageKey = `actividad_${id}`;
      const dataGuardada = JSON.parse(localStorage.getItem(localStorageKey));
      const cantidadInicial = dataGuardada?.cantidad || 0;

      const card = document.createElement("div");
      card.classList.add("card-actividades");

      // Asegúrate de que el precio está siendo manejado correctamente.
      const precio = actividad.precio.monto || actividad.precio;

      card.innerHTML = `
        <div class="foto-actividad">
          <img src="${actividad.foto}" alt="${actividad.titulo}" id="imagen_${id}">
        </div>

        <div class="cont-descip-actividad">
          <span id="nombre_${id}" class="nombre-actividad">${actividad.titulo}</span>

          <div class="cont-precio">
            <div class="precioTxt">
              <span id="precio_${id}">${precio}</span>
            </div>
            <span class="infoImpuestos">Los impuestos se calculan al final</span>
          </div>

          <div class="cont-contador">
            <span class="labelContador">Ingresa la cantidad de huéspedes</span>
            <input type="number" class="input-contador" id="contador_${id}" name="huespedes" min="0" value="${cantidadInicial}" />
          </div>
        </div>
      `;

      contenedor.appendChild(card);

      const input = card.querySelector(`#contador_${id}`);
      input.addEventListener('input', () => {
        const cantidad = parseInt(input.value);
        if (cantidad > 0) {
          // Aquí se hace la modificación para guardar los detalles correctos
          const actividadConCantidad = {
            id: actividad.id,
            nombre: actividad.titulo,
            precio: actividad.precio.monto, // extrae el número directamente
            cantidad: cantidad
          };
          localStorage.setItem(localStorageKey, JSON.stringify(actividadConCantidad));
        } else {
          localStorage.removeItem(localStorageKey);
        }
      });
    });
  });
}

function agruparActividadesSeleccionadas() {
  const actividadesSeleccionadas = [];

  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);

    if (clave.startsWith("actividad_")) {
      const actividad = JSON.parse(localStorage.getItem(clave));

      if (actividad && actividad.cantidad > 0) {
        // Asegúrate de convertir correctamente el precio a número
        const precioNum = parseInt(actividad.precio.monto || actividad.precio, 10);
        actividadesSeleccionadas.push({
          nombre: actividad.titulo,
          precio: precioNum,
          cantidad: actividad.cantidad
        });
      }
    }
  }

  localStorage.setItem("actividadesSeleccionadas", JSON.stringify(actividadesSeleccionadas));
}
