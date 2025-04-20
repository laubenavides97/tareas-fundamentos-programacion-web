// Obtener el modal 
var modal = document.getElementById("modal1");
var modalImg = document.getElementById("img01"); 

// Al hacer clic en el contenedor con fondo
document.getElementById('imgIzquierda').onclick = function() {
  var imageUrl = this.getAttribute('data-img');
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

// Cierre de la imagen (modal1)
var cerrarImg = document.getElementById("cerrarImg");
cerrarImg.onclick = function() {
  modal.style.display = "none";
}

