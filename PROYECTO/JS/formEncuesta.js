// encuesta.js

window.addEventListener('load', init, false);

function init() {
    emailjs.init("Bq4g2t3PbX0tAxDl6");

    const form = document.getElementById('formEncuesta');
    const emailField = document.getElementById('feedbackEmail');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Reemplaza este bloque en tu archivo encuesta.js dentro del form.addEventListener('submit', ...)

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validar todos los campos requeridos
        const requiredFields = form.querySelectorAll('[required]');
        let formValid = true;

        requiredFields.forEach(field => {
            // Si es un radio group
            if (field.type === 'radio') {
                const group = form.querySelectorAll(`input[name="${field.name}"]`);
                const checked = Array.from(group).some(input => input.checked);
                if (!checked) {
                    formValid = false;
                }
            }
            // Si es texto u otro input
            else if (!field.value.trim()) {
                formValid = false;
            }
        });

        // Validar correo
        const emailValue = emailField.value.trim();
        const emailValid = expressionEmail.test(emailValue);

        if (!formValid) {
            mostrarAlerta('empty');
            return;
        }

        if (!emailValid) {
            mostrarAlerta('invalid');
            return;
        }

        // Enviar con EmailJS
        emailjs.sendForm('service_boletin', 'template_ltmsb4q', '#formEncuesta')
            .then(() => {
                mostrarAlerta('success');
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                mostrarAlerta('error');
            });
    });


    function mostrarAlerta(tipo) {
        let title = '';
        let message = '';
        let showConfirmButton = true;
        let timer = null;
        let lottie = '';

        switch (tipo) {
            case 'empty':
                title = 'Campos incompletos';
                message = 'Por favor, completa todos los campos marcados con asterisco.';
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'invalid':
                title = 'Correo inválido';
                message = 'Ingresa un correo electrónico válido.';
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'success':
                title = '¡Gracias por tu opinión!';
                message = 'Hemos recibido tu encuesta correctamente.';
                lottie = 'https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie';
                showConfirmButton = false;
                timer = 4000;
                break;
            case 'error':
                title = 'Error al enviar';
                message = 'Hubo un problema al enviar tu encuesta. Inténtalo de nuevo.';
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                showConfirmButton = false;
                timer = 4000;
                break;
        }

        Swal.fire({
            title: title,
            html: `
            <dotlottie-player 
                src="${lottie}" 
                background="transparent" 
                speed="0.75" 
                class="lottieAlert1" 
                autoplay>
            </dotlottie-player>
            ${message ? `<p>${message}</p>` : ''}
        `,
            confirmButtonText: showConfirmButton ? 'Intentar de nuevo' : undefined,
            showConfirmButton: showConfirmButton,
            timer: timer,
            timerProgressBar: !!timer,
            scrollbarPadding: false,
            customClass: {
                title: "H2 Black",
                htmlContainer: "S2 Black",
                popup: "popup",
                confirmButton: "CTA-Hug"
            }
        });
    }
}

/*window.addEventListener('load', init, false);

function init () {
    emailjs.init("Bq4g2t3PbX0tAxDl6");

    const alerta = document.getElementById('alertaForm');
    const form = document.getElementById('formEncuesta');
    const emailInput = document.getElementById('feedbackEmail');

    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Limpiar alertas previas
        limpiarAlerta();

        // Validar selects requeridos
        const camposRequeridos = [
            'overall-rating', 'cleanliness', 'comfort', 'staff', 'value', 'food', 'activities'
        ];

        for (let id of camposRequeridos) {
            const select = document.getElementById(id);
            if (!select.value) {
                mostrarAlerta('Por favor responde todas las preguntas requeridas.');
                return;
            }
        }

        // Validar radios
        const radios = document.querySelectorAll('input[name="recommend"]');
        const seleccionado = Array.from(radios).some(radio => radio.checked);
        if (!seleccionado) {
            mostrarAlerta('Por favor selecciona si nos recomendarías.');
            return;
        }

        // Validar correo electrónico
        const correo = emailInput.value.trim();
        if (correo === '' || !expressionEmail.test(correo)) {
            mostrarAlerta('Por favor ingresa un correo válido.');
            return;
        }

        // Enviar con EmailJS
        emailjs.sendForm('service_boletin', 'template_ltmsb4q', '#formEncuesta')
            .then(() => {
                form.reset();
                limpiarAlerta(); // limpiar si había algún mensaje anterior

                // Mostrar sweet alert
                Swal.fire({
                    icon: 'success',
                    title: '¡Gracias por tu opinión!',
                    text: 'Tu encuesta se envió correctamente. Te enviamos una copia a tu correo.',
                    confirmButtonColor: '#3085d6'
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                mostrarAlerta('Hubo un error al enviar tu encuesta. Intenta de nuevo más tarde.');
            });
    });
}
*/