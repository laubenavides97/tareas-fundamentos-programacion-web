const listaEstudiantes = []

function agregarEstudiante() {
    nombre = document.getElementById('nombre').value,
    apellidosEstudiante = document.getElementById('apellidos').value,
    nota1 = parseFloat(document.getElementById('nota1').value),
    nota2 = parseFloat(document.getElementById('nota2').value),
    nota3 = parseFloat(document.getElementById('nota3').value);

    if (nombre === '' || apellidosEstudiante === '' || nota1 === '' || nota2 === '' || nota3 === '') {
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
        //calculo del promedio
        const promedio = (nota1 + nota2 + nota3) / 3;

        //agregar estudiantes a la list
        listaEstudiantes.push({nombre, apellidosEstudiante, promedio});

        //actualizar el select de estudiantes
        const selectEstudiantes = document.getElementById('seleccionarEstudiante');

        //se crea una etiqueta
        const option = document.createElement('option');

        //se agrega, nombre y apellido
        option.value = nombre + ' ' + apellidosEstudiante;

        //se establece el texto visible en la etiqueta <option>
        option.text = nombre + ' ' + apellidosEstudiante;

        //se agrega la etiqueta option al elemento select
        selectEstudiantes.appendChild(option);

        //se llama a la funcio para limpiar los campos una vez registrados
        limpiarDatos();

        Swal.fire({
            html: '<dotlottie-player src="https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie" background="transparent" speed="0.75" class="lottieAlert1" autoplay></dotlottie-player>',
            title: "Estudiante agregado",
            confirmButtonText: "Siguiente estudiante",
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

//Funcion que almacena el codigo para calcular el promedio
function calcularPromedio(){
    //se obtiene el valor seleccionado en el elemento select
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;
    const resultado = document.getElementById('resultado');

    //busca el estudiantes seleccionado en el arreglo 'listaEstudiantes'
    let estudianteSeleccionado = null;

    //inicia un ciclo for que recorre cada elemento en el arreglo 'listaEstudiantes'
    for (let i = 0; i < listaEstudiantes.length; i++) {
        //obtiene el estudiante en la posicion 'i' del arreglo
        const estudiante = listaEstudiantes[i];

        //concatena el nombre y el apellido del estudiante para obtener el nombre completo
        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidosEstudiante;

        //compara si el 'nombreCompleto' es igual al 'nombreSeleccionado'
        if (nombreCompleto === nombreSeleccionado) {
            //si hay una coincidencia, asigna el objeto del estudiante a 'estudianteSeleccionado?
            estudianteSeleccionado = estudiante;

            //sale del ciclo 'for' porque ya se encontró una coincidencia
            break;
        }
    }

    // verifica si se ha encontrado un estudiante seleccionado (si 'estudianteSelesscionado' no es null o undefined)
    if (estudianteSeleccionado) {
        //visualizar el resultado 
        resultado.style.display ="flex";

        //obtiene el promedio del estudiante seleccionado
        const promedioEstudiante = estudianteSeleccionado.promedio;

        //actualiza el contenido del elemento con id 'resultado'
        resultado.textContent = 'El promedio de ' + nombreSeleccionado + ' es de: ' + promedioEstudiante;
    } else {
        //borra el contenido del elemento con id 'resultado'
        resultado.textContent = '';
    }
}

function limpiarDatos(){
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}
