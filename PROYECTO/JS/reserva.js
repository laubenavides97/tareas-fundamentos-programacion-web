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

  function validation_alert(ptext) {
    swal.fire({
      title: "Verifica la información!",
      html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" class="lottieAlert1" autoplay></dotlottie-player> <p>' + ptext + "</p>",
      confirmButtonText: "Intentar de nuevo",
      scrollbarPadding: false,
      customClass: {
        title: "H2 Black",
        htmlContainer: "S2 Black",
        popup: "popup",
        confirmButton: "CTA-Hug"
      }
    })
  }

  const form = document.getElementById("form-fechas");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const entrada = document.getElementById("fecha-entrada").value;
    const salida = document.getElementById("fecha-salida").value;
    const personas = parseInt(document.getElementById("cantidad-personas").value, 10);

    if (!entrada || !salida || !personas) {
      text = "Tienes que llenar todos los espacios";
      validation_alert(text);
      return;
    }

    const fechaEntrada = new Date(entrada);
    const fechaSalida = new Date(salida);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaEntrada <= hoy) {
      text = "La fecha de entrada debe ser posterior a hoy";
      validation_alert(text);
      return;
    }

    if (fechaSalida <= fechaEntrada) {
      text = "Las fechas son inválidas";
      validation_alert(text);
      return;
    }

    if (personas < 1) {
      text = "Ingresa más de un huésped";
      validation_alert(text);
      return;
    }

    // ✅ Si todo es válido, guardar en localStorage y continuar
    localStorage.setItem("fechaEntrada", entrada);
    localStorage.setItem("fechaSalida", salida);
    localStorage.setItem("personas", personas);

    Swal.fire({
      title: "Información correcta",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      html: '<dotlottie-player src="https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie" background="transparent" speed="0.75" class="lottieAlert1" autoplay></dotlottie-player> <p>Estamos buscando tu alojamiento</p>',
      scrollbarPadding: false,
      customClass: {
        title: "H2 Black",
        htmlContainer: "S2 Black",
        popup: "popup"
      }
    }).then(() => {
      window.location.href = "../HTML/catalogo.html";
    });
  });
});
