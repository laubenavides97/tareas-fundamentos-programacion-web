window.addEventListener('load', initConfirmacion, false);

function initConfirmacion() {
    emailjs.init("Bq4g2t3PbX0tAxDl6");

    const form = document.getElementById('emailConfirmacion');
    const btn = document.getElementById('btnSend');
    const emailField = document.getElementById('correo_electronico');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btn.addEventListener('click', function () {
        const requiredFields = form.querySelectorAll('[required]');
        let formValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                formValid = false;
            }
        });

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

        // Enviar el formulario con EmailJS
        emailjs.sendForm('service_boletin', 'template_ltmsb4q', '#emailConfirmacion')
            .then(() => {
                mostrarAlerta('success');
                form.reset();
            })
            .catch((error) => {
                console.error('Error al enviar:', error);
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
                message = 'Por favor, completa todos los campos del formulario.';
                lottie = 'https://lottie.host/540110b8-04e2-4830-9e71-c3f5507e71e4/pO8VNHihJy.lottie';
                break;
            case 'invalid':
                title = 'Correo inválido';
                message = 'Ingresa un correo electrónico válido.';
                lottie = 'https://lottie.host/540110b8-04e2-4830-9e71-c3f5507e71e4/pO8VNHihJy.lottie';
                break;
            case 'success':
                title = '¡Reserva confirmada!';
                message = 'Hemos enviado la confirmación a tu correo.';
                lottie = 'https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie';
                showConfirmButton = false;
                timer = 4000;
                break;
            case 'error':
                title = 'Error al enviar';
                message = 'Hubo un problema al enviar la confirmación. Intenta de nuevo.';
                lottie = 'https://lottie.host/540110b8-04e2-4830-9e71-c3f5507e71e4/pO8VNHihJy.lottie';
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
};