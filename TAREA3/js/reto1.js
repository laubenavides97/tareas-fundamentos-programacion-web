document.getElementById("btnAccion").addEventListener("click", facturar);
document.getElementById("btnBorrar").addEventListener("click", borrarInfo);

//funcion que valida los datos de facturar y hace los cálculos
function facturar() {
    const cliente = document.getElementById("cliente").value;
    const articulo = document.getElementById("articulo").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    //validacion de los inputs
    if (cliente === '' || articulo === '' || isNaN(precio) || isNaN(cantidad)) {
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
        // Generar número de factura aleatorio
        const numFactura = Math.floor(100000 + Math.random() * 900000);
        // Obtener fecha actual
        const fecha = new Date().toLocaleDateString();

        // Calcular montos
        const subtotal = precio * cantidad;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const total = subtotal + iva + servicio;

        // Mostrar datos en la factura
        document.getElementById("numFactura").textContent = `Factura No.: ${numFactura}`;
        document.getElementById("fecha").textContent = `Fecha: ${fecha}`;
        document.getElementById("nombreCliente").textContent = `Cliente: ${cliente}`;
        document.getElementById("articuloOutput").textContent = articulo;
        document.getElementById("cantidadOutput").textContent = cantidad;
        document.getElementById("precioOutput").textContent = `¢${precio.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;
        document.getElementById("Subtotal").textContent = `¢${subtotal.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;
        document.getElementById("IVA").textContent = `¢${iva.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;
        document.getElementById("Servicio").textContent = `¢${servicio.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;
        document.getElementById("Total").textContent = `¢${total.toLocaleString("es-CR", { minimumFractionDigits: 2 })}`;

    }
}

function borrarInfo() {
    document.getElementById("cliente").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";

    document.getElementById("numFactura").textContent = "Factura No.: ";
    document.getElementById("fecha").textContent = "Fecha: ";
    document.getElementById("nombreCliente").textContent = "Cliente: ";
    document.getElementById("articuloOutput").textContent = "";
    document.getElementById("cantidadOutput").textContent = "";
    document.getElementById("precioOutput").textContent = "";
    document.getElementById("Subtotal").textContent = "";
    document.getElementById("IVA").textContent = "";
    document.getElementById("Servicio").textContent = "";
    document.getElementById("Total").textContent = "";
}