window.addEventListener('load', init, false);

function init () {
    emailjs.init("Bq4g2t3PbX0tAxDl6");

    let email = document.getElementById('inscriptionEmail');
    let btnEnviar = document.getElementById('btnSend');
    let alerta = document.getElementById('alertaForm');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick = function() {
        const correo = email.value.trim();
        const lang = document.documentElement.lang; // Detectar idioma actual

        if (correo === '') {
            mostrarAlerta(translations[lang]['empty_email'], false);
        } else if (!expressionEmail.test(correo)) {
            mostrarAlerta(translations[lang]['invalid_email'], false);
        } else {
            emailjs.sendForm('service_boletin', 'template_2t6ro4d', '#formSuscripcion')
                .then(() => {
                    mostrarAlerta(translations[lang]['success_email'], true);
                    cleanInputs();
                })
                .catch((error) => {
                    mostrarAlerta(translations[lang]['error_email'], false);
                    console.error('Error:', error);
                });                
        }
    }

    function mostrarAlerta(mensaje, esExito) {
        alerta.textContent = mensaje;
        alerta.classList.toggle('alertaVerde', esExito);
        alerta.classList.toggle('alertaRoja', !esExito);
    }

    function cleanInputs () {
        email.value = '';
    }
}