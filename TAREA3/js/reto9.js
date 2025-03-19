const reporte = []

function votar() {
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const correo = document.getElementById("correo").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const opcion = document.getElementById("opcion").value;

    if (nombre === '' || cedula === '' || correo === '' || nacimiento === '' || opcion === '') {
        Swal.fire({
            html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" autoplay></dotlottie-player>',
            title: "Debe llenar todos los espacios",
            confirmButtonText: "Intentar de nuevo",
            scrollbarPadding: false,
            customClass: {
                title: "titlePopUp",
                htmlContainer: "popUpContainer",
                popup: "popup",
                confirmButton: "btnPopUp"
            }
        });
    } else {
        //agregar info del voto a la lista
        reporte.push({ nombre, cedula, correo, nacimiento, opcion});

        //se llama a la funcio para limpiar los campos una vez registrados
        limpiarDatos();

        Swal.fire({
            html: '<dotlottie-player src="https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie" background="transparent" speed="0.75" class="lottieAlert1" autoplay></dotlottie-player>',
            title: "Voto enviado",
            confirmButtonText: "Ok",
            scrollbarPadding: false,
            customClass: {
                title: "titlePopUp",
                htmlContainer: "popUpContainer",
                popup: "popup",
                confirmButton: "btnPopUp"
            }
        });
    }

}

function verVotos() {
    if (reporte.length === 0) {
        Swal.fire({
            html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" autoplay></dotlottie-player>',
            title: "No hay votos registrados",
            confirmButtonText: "Ok",
            scrollbarPadding: false,
            customClass: {
                title: "titlePopUp",
                htmlContainer: "popUpContainer",
                popup: "popup",
                confirmButton: "btnPopUp"
            }
        });
        return;
    }

    let votosHTML = "<ul style='text-align: left;'>";
    reporte.forEach((voto, index) => {
        votosHTML += `<li class="pInput texto"><strong>Voto ${index + 1}:</strong> ${voto.nombre} - ${voto.cedula} - ${voto.correo} - ${voto.nacimiento} - ${voto.opcion}</li>`;
    });
    votosHTML += "</ul>";

    Swal.fire({
        title: "Reporte de votos",
        html: votosHTML,
        confirmButtonText: "Cerrar",
        scrollbarPadding: false,
        customClass: {
            title: "titlePopUp",
            popup: "popup",
            confirmButton: "btnPopUp"
        }
    });
}


function limpiarDatos(){
    document.getElementById('nombre').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('nacimiento').value = '';
    document.getElementById('opcion').value = '';
}
