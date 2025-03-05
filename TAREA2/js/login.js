document.getElementById("btn-login").addEventListener("click", login);

//funcion que valida el login

function validation_alert(ptext) {
    swal.fire({
        title: "Verify the information!",
        html: '<dotlottie-player src="https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie" background="transparent" speed="0.5" class="lottieAlert1" autoplay></dotlottie-player> <p>' + ptext + "</p>",
        confirmButtonText: "Try again",
        scrollbarPadding: false,
        customClass: {
            title: "title1",
            htmlContainer: "p1",
            popup: "popup",
            confirmButton: "btn_validationAlert"
    }
    })
}



// funcion login

function login () {
    let user_input = document.getElementById ("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;

    //declaración de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";

    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";

    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            // este es el texto que lleva el parametro de la funcion validacion_alert
            text = "Please enter your log in information.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count ++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Correct credentials",
                showConfirmButton: false,
                timer: 3500,
                html: '<dotlottie-player src="https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie" background="transparent" speed="0.75" class="lottieAlert1" autoplay></dotlottie-player>',
                scrollbarPadding: false,
                customClass: {
                    title: "title1",
                    htmlContainer: "p1",
                    popup: "popup"
            }
            }).then(() => {
                window.location.href = "landing.html", "blak";
            });
        } else {
            text = "Username or password is incorrect.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}