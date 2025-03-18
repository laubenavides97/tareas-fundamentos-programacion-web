var imagen = "";
var a = "";
var n = "";

window.onload = function () {
    document.getElementById("celular").onchange = function (e) {
        a = e.target.value;
        if (a == "iPhone 16") {
            imagen = "imagenes/iPhone16.png";
        } else if (a == "iPhone 16 Pro") {
            imagen = "imagenes/iPhone16Pro.png";
        } else if (a == "iPhone 16 Pro Max") {
            imagen = "imagenes/iPhone16ProMax.png";
        } else if (a == "iPhone 16 e") {
            imagen = "imagenes/iPhone16e.png";
        }
        //agrega la imagen del celular
        document.getElementById("imagen").src = imagen;
    }

    document.getElementById("almacenamiento").onchange = function (es) {
        n = es.target.value;
    }
}

function calcular() {
    //validacion de los 2 combos
    if (!a || !n) {
        Swal.fire({
            html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" autoplay></dotlottie-player>',
            title: "Seleccione el modelo y el almacenamiento del celular",
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
    //ciclo switch
    var precio = 0;
    switch (a) {
        case "iPhone 16":
            if (n == "128GB")
                precio = 799;
            if (n == "256GB")
                precio = 899;
            else
                precio = 1099;
            break;

        case "iPhone 16 Pro":
            if (n == "128GB")
                precio = 999;
            if (n == "256GB")
                precio = 1099;
            else
                precio = 1299;
            break;

        case "iPhone 16 Pro Max":
            if (n == "128GB")
                precio = 1199;
            if (n == "256GB")
                precio = 1399;
            else
                precio = 1599;
            break;

        case "iPhone 16 e":
            if (n == "128GB")
                precio = 599;
            if (n == "256GB")
                precio = 699;
            else
                precio = 899;
            break;

        default:
            break;
    }

    swal.fire({
        // a es el target celular y n es el target del almacenamiento 
        imageUrl: imagen,
        title: "<p> El precio del " + a + " de " + n + " es: <br> $" + precio,
        customClass: {
            title: "resultado",
            htmlContainer: "popUpContainer",
            popup: "popup",
            confirmButton: "btnPopUp"
        }
    });
}

function limpiar() {
    document.getElementById("celular").value = "";
    document.getElementById("almacenamiento").value = "";
    document.getElementById("imagen").src = "imagenes/iPhones.png";
    a = "";
    n = "";
    imagen = "";

}