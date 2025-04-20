// Función para mostrar el video
function ejecutar(div, video_id) {
  var videoElement = document.getElementById(video_id);
  var url = videoElement.src;

  // Si ya tiene autoplay=1, no lo agregamos otra vez
  if (!url.includes('autoplay=1')) {
    let separator = url.includes('?') ? '&' : '?';
    videoElement.src = url + separator + 'autoplay=1';
  }

  document.getElementById(div).style.display = 'block';
}


// Función para ocultarlo y pausar
function ocultar(div, video_id) {
  var videoElement = document.getElementById(video_id);
  var url = videoElement.src;

  // Quitar cualquier versión de autoplay=1
  var cleaned = url.replace(/([?&])autoplay=1(&)?/, (_, p1, p2) => {
    if (p1 === '?' && !p2) return ''; // ?autoplay=1 at end
    if (p1 === '?' && p2) return '?'; // ?autoplay=1&...
    return p2 ? p1 : ''; // &autoplay=1 or &autoplay=1 at end
  });

  videoElement.src = cleaned;
  document.getElementById(div).style.display = 'none';
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    ocultar('modalVideo', 'video01');
  }
});

