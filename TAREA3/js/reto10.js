document.addEventListener('DOMContentLoaded', function () {
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');
    const buscar = document.getElementById('btnAccion');

    buscar.addEventListener('click', function() {
        //funcion trim que permite eliminar espacios en blanco al inicio y al final
        const cedula = cedulaInput.value.trim();
        
        //verifica si el campo de cedula esta vacio
        if (cedula.length == 0) {
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
        } else
            // verifican si el valor ingresado no es numero 
            if (isNaN(cedula)) {
                Swal.fire({
                    html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" autoplay></dotlottie-player>',
                    title: "Debe ingresar un número",
                    confirmButtonText: "Intentar de nuevo",
                    scrollbarPadding: false,
                    customClass: {
                        title: "titlePopUp",
                        htmlContainer: "popUpContainer",
                        popup: "popup",
                        confirmButton: "btnPopUp"
                    }
                });
            } else
                //cargar la funcion validar Cedula
                if (validarCedula(cedula)) {
                    //cargar la funcion que muestra los empleados por cedula
                    mostrarInformacionEmpleado(cedula);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: "La cédula ingresada no es válida",
                        confirmButtonText: "Intentar de nuevo",
                        scrollbarPadding: false,
                        customClass: {
                            title: "titlePopUp",
                            htmlContainer: "popUpContainer",
                            popup: "popup",
                            confirmButton: "btnPopUp"
                        }
                    });
                }
    });

    //funcion que permite valida el campo cedula
    function validarCedula(cedula) {
        //expresion que verifica si la cedula tiene exactamente 9 digitos numericos
        return /^\d{9}$/.test(cedula);
    }

    //funcion que permite almacenar los datos de los empleados
    function mostrarInformacionEmpleado(cedula) {
        //objeto llamado empleados que guarda todos los datos del empleado
        const empleados = {
            '109110338': { nombre: 'Andrés', apellidos: 'Gómez Ramírez', foto: '../imagenes/usuario1.jpg', departamento: 'Logística y Operaciones' },
            '209110338': { nombre: 'Sofía', apellidos: ' Fernández Torres', foto: '../imagenes/usuario2.jpg', descripcion: 'Diseñadora UX-UI' },
            '309110338': { nombre: 'Mateo', apellidos: ' Vargas León', foto: '../imagenes/usuario3.jpg', descripcion: 'Programador Web' },
            '409110338': { nombre: 'Valentina', apellidos: ' Ruiz Castillo', foto: '../imagenes/usuario4.jpg', descripcion: 'Diseñadora gráfica' },
            '509110338': { nombre: 'Sebastián', apellidos: ' López Herrera', foto: '../imagenes/usuario5.jpg', descripcion: 'Analista de sistema' },
        };
        //condicional que permite validar si el usuario existe
        if (empleados[cedula]) {
            //constante que almacena los datos del empleado
            const empleado = empleados[cedula];
            //cargar funcion que muestra el resultado final de la busqueda
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no exixte...'
            });
        }
    }

    //funcion que muestra el resultado final de la busqueda
    function mostrarResultado(empleado) {
        //permite crear contenido HTML usando la propieda innerHTML
        resultadoContainer.innerHTML = `
            <div class="card" style="width: 18rem;">
                        <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                        <div class="card-body">
                            <h5 class="card-title">${empleado.nombre}</h5>
                            <p class="card-text">Descripción: ${empleado.descripcion}</p>
                            <p class="card-text">Jornada: ${empleado.jornada}</p>
                            <p class="card-text">Salario: ${empleado.salario}</p>
                        </div>
                    </div>
                `;
    }

})

function borrar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}