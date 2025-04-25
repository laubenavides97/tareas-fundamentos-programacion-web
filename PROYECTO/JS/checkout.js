document.addEventListener("DOMContentLoaded", () => {
  // Recuperar datos del localStorage
  const fechaEntrada = localStorage.getItem("fechaEntrada");
  const fechaSalida = localStorage.getItem("fechaSalida");
  const personas = localStorage.getItem("personas");
  const alojamiento = JSON.parse(localStorage.getItem("alojamientoSeleccionado"));
  const actividades = JSON.parse(localStorage.getItem("actividadesSeleccionadas")) || [];

  // Mostrar fechas y cantidad de personas
  document.querySelectorAll("#fecha-entrada-checkout").forEach(el => el.textContent = fechaEntrada || "-");
  document.getElementById("fecha-salida-checkout").textContent = fechaSalida || "-";
  document.getElementById("cant-huespedes-checkout").textContent = personas ? `${personas} huésped(es)` : "-";

  // Mostrar alojamiento y tarifa por noche
  let precioPorNoche = 0;
  if (alojamiento) {
    document.getElementById("alojamientoSeleccionado").textContent = alojamiento.nombre;
    precioPorNoche = parseInt(alojamiento.precio, 10);
    document.getElementById("monto-noche-checkout").textContent = `¢${precioPorNoche.toLocaleString()}`;
  }

  // Calcular noches
  const entrada = new Date(fechaEntrada);
  const salida = new Date(fechaSalida);
  const noches = Math.max(1, Math.ceil((salida - entrada) / (1000 * 60 * 60 * 24)));
  const totalAlojamiento = noches * precioPorNoche;

  document.getElementById("num-noches-checkout").textContent = `${noches} noche(s)`;
  document.getElementById("total-noches-checkout").textContent = `¢${totalAlojamiento.toLocaleString()}`;

  // Mostrar actividades
const actividadesContainer = document.querySelector(".actividad-selected").parentNode;
let totalActividades = 0;

actividades.forEach((act) => {
  const precio = Number(act.precio) || 0;
  const cantidad = Number(act.cantidad) || 0;
  const totalActividad = precio * cantidad;
  totalActividades += totalActividad;

  const seccion = document.createElement("div");
  seccion.classList.add("contPrecios");

  seccion.innerHTML = `
    <span class="detail-label">${act.nombre} (¢${precio.toLocaleString()} x ${cantidad})</span>
    <span class="detail-label">¢${totalActividad.toLocaleString()}</span>
  `;

  actividadesContainer.appendChild(seccion);
});


  // Calcular subtotal, IVA y total
  const subtotal = totalAlojamiento + totalActividades;
  const iva = Math.round(subtotal * 0.13);
  const totalPagar = subtotal + iva;

  document.getElementById("subtotal").textContent = `¢${subtotal.toLocaleString()}`;
  document.getElementById("IVA").textContent = `¢${iva.toLocaleString()}`;
  document.getElementById("total-pagar").textContent = `¢${totalPagar.toLocaleString()}`;
});
