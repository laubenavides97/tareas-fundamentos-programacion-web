function renderAlojamientos(alojamientos) {
  const contenedor = document.getElementById('contenedor-cards');
  contenedor.innerHTML = ''; // Limpiar por si hay contenido previo

  alojamientos.forEach(aloj => {
    const card = document.createElement('div');
    card.classList.add('card-alojamiento');
    card.id = aloj.id;

    // Construir el contenido HTML de la card
    card.innerHTML = `
      <div class="foto-alojamiento">
        <img src="${aloj.imagen_alojamiento}" alt="${aloj.nombre}" id="imagen_alojamiento">
      </div>

      <div class="cont-descip-alojamiento">
        <span class="nombre-alojamiento">${aloj.nombre}</span>

        <div class="cont-info-alojamiento">
          <div class="cont-amenidades">
            ${aloj.amenidades.map(amenidad => `
              <div class="amenidades cont-amenidad">
                ${amenidad.icono}
                <span class="info">${amenidad.info}</span>
              </div>
            `).join('')}
          </div>

          <div class="cont-precio">
            <div class="precioTxt"><span class="precio">¢${aloj.precio}</span> por noche</div>
            <span class="infoImpuestos">Los impuestos se calculan al final</span>
            <button type="submit" class="CTA-Hug btn-seleccionar-aloj">Seleccionar alojamiento</button>
          </div>
        </div>
      </div>
    `;

    contenedor.appendChild(card);

    const boton = card.querySelector('.btn-seleccionar-aloj');
    boton.addEventListener('click', () => {
      localStorage.setItem('alojamientoSeleccionado', JSON.stringify(aloj));
      console.log('Alojamiento guardado:', aloj);

      // Redirigir a la pantalla de actividades
      window.location.href = 'actividades.html';
    });
  });
}

// Llama la función después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  renderAlojamientos(alojamiento);
});
