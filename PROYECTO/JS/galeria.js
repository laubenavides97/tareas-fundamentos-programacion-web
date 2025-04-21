/*Funcionalidad de la galeria evento onchange*/

document.getElementById('categoriaFotos').addEventListener('change', galeria);

function galeria() {
  var opciones = document.getElementById('categoriaFotos').value;
  switch (opciones) {
    case "alojamiento":
      document.querySelector('.galeriaAlojamiento').style.display = "flex";
      document.querySelector('.galeriaNaturaleza').style.display = "none";
      document.querySelector('.galeriaActividades').style.display = "none";
      document.querySelector('.galeriaGastronomia').style.display = "none";
      break;
    case "naturaleza":
      document.querySelector('.galeriaAlojamiento').style.display = "none";
      document.querySelector('.galeriaNaturaleza').style.display = "flex";
      document.querySelector('.galeriaActividades').style.display = "none";
      document.querySelector('.galeriaGastronomia').style.display = "none";
      break;
    case "actividades":
      document.querySelector('.galeriaAlojamiento').style.display = "none";
      document.querySelector('.galeriaNaturaleza').style.display = "none";
      document.querySelector('.galeriaActividades').style.display = "flex";
      document.querySelector('.galeriaGastronomia').style.display = "none";
      break;
    case "gastronomia":
      document.querySelector('.galeriaAlojamiento').style.display = "none";
      document.querySelector('.galeriaNaturaleza').style.display = "none";
      document.querySelector('.galeriaActividades').style.display = "none";
      document.querySelector('.galeriaGastronomia').style.display = "flex";
      break;
    default:
      document.querySelector('.galeriaAlojamiento').style.display = "none";
      document.querySelector('.galeriaNaturaleza').style.display = "none";
      document.querySelector('.galeriaActividades').style.display = "none";
      document.querySelector('.galeriaGastronomia').style.display = "none";
  }
}
