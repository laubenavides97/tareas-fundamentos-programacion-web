document.addEventListener("DOMContentLoaded", () => {
 // Recuperar valores del localStorage
 const fechaEntrada = localStorage.getItem("fechaEntrada");
 const fechaSalida = localStorage.getItem("fechaSalida");
 const personas = localStorage.getItem("personas");

 // Asignar los valores si existen
 if (fechaEntrada) {
   document.getElementById("fecha-entrada").value = fechaEntrada;
 }

 if (fechaSalida) {
   document.getElementById("fecha-salida").value = fechaSalida;
 }

 if (personas) {
   document.getElementById("cantidad-personas").value = personas;
 }
});