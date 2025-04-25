document.addEventListener("DOMContentLoaded", () => {
  // Recuperar datos del localStorage
  const fechaEntrada = localStorage.getItem("fechaEntrada");
  const fechaSalida = localStorage.getItem("fechaSalida");
  const personas = localStorage.getItem("personas");
  const alojamiento = JSON.parse(localStorage.getItem("alojamientoSeleccionado"));
  const actividades = [];

  //Busca las actividades
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("actividad_")) {
      const actividad = JSON.parse(localStorage.getItem(key));
      actividades.push(actividad);
    }
  }


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
  // Inicia el total de actividades en 0
  let totalActividades = 0;
  // Selecciona el contenedor donde se van a mostrar las actividades seleccionadas
  const actividadesContainer = document.getElementById("contenedor-actividades-checkout");
  //si hay actividades
  console.log("Checkpoint1");
  if (actividades) {
    console.log("Checkpoint2");
    actividades.forEach((act) => {
      console.log("Hay actividades seleccionadas");
      const precio = Number(act.precio);
      const cantidad = Number(act.cantidad);
      const totalActividad = precio * cantidad;
      totalActividades += totalActividad;

      const seccion = document.createElement("li");
      seccion.innerHTML = `
      <li class="detail-label">${act.nombre} (¢${precio.toLocaleString()} x ${cantidad})</li>
      <li class="detail-label">¢${totalActividad.toLocaleString()}</li>
      <br>
    `;

      actividadesContainer.appendChild(seccion);
    });
  }
  // si no hay actividades seleccionadas
  else {
    const li = document.createElement('li');
    li.classList.add("detail-label");
    li.innerText = `No seleccionaste actividades`
    actividadesContainer.appendChild(li);
    console.log("No hay actividades seleccionadas");
  }
  console.log("Checkpoint3");
  // Calcular subtotal, IVA y total
  const subtotal = totalAlojamiento + totalActividades;
  const iva = subtotal * 0.13;
  const totalPagar = subtotal + iva;

  document.getElementById("subtotal").textContent = `¢${subtotal.toLocaleString()}`;
  document.getElementById("IVA").textContent = `¢${iva.toLocaleString()}`;
  document.getElementById("total-pagar").textContent = `¢${totalPagar.toLocaleString()}`;
});
