document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const btnConvertirVenta = document.getElementById("btnAccion");
    const btnConvertirCompra = document.getElementById("btnAccion2");
    const btnBorrarVenta = document.getElementById("btnBorrar");
    const btnBorrarCompra = document.getElementById("btnBorrar2");
    const resultado = document.querySelector(".pResultado");

    // Función para convertir dólares a colones
    function convertirDolaresAColones() {
        let montoDolares = parseFloat(document.getElementById("dolares").value);
        let tipoCambio = parseFloat(document.getElementById("tipoCambioVenta").value);

        if (isNaN(montoDolares) || isNaN(tipoCambio) || montoDolares <= 0 || tipoCambio <= 0) {
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
            return;
        }

        let colones = montoDolares * tipoCambio;
        resultado.textContent = `¢${colones.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;
        resultado.style.opacity = "1";
    }

    // Función para convertir colones a dólares
    function convertirColonesADolares() {
        let montoColones = parseFloat(document.getElementById("colones").value);
        let tipoCambio = parseFloat(document.getElementById("tipoCambioCompra").value);

        if (isNaN(montoColones) || isNaN(tipoCambio) || montoColones <= 0 || tipoCambio <= 0) {
            Swal.fire({
                html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" autoplay></dotlottie-player>',
                title: "Datos inválidos",
                confirmButtonText: "Intentar de nuevo",
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

        let dolares = montoColones / tipoCambio;
        resultado.textContent = `$${dolares.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
        resultado.style.opacity = "1";
    }

    // Función para borrar los campos y ocultar el resultado
    function borrarCampos() {
        document.getElementById("dolares").value = "";
        document.getElementById("tipoCambioVenta").value = "";
        document.getElementById("colones").value = "";
        document.getElementById("tipoCambioCompra").value = "";
        resultado.textContent = "Resultado";
        resultado.style.opacity = "0";
    }

    // Asignar eventos a los botones
    btnConvertirVenta.addEventListener("click", convertirDolaresAColones);
    btnConvertirCompra.addEventListener("click", convertirColonesADolares);
    btnBorrarVenta.addEventListener("click", borrarCampos);
    btnBorrarCompra.addEventListener("click", borrarCampos);
});


