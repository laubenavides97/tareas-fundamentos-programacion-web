window.addEventListener('load', initContacto, false);

function initContacto() {
    emailjs.init("9eICZ_CxJjzWKzQfr");

    const form = document.getElementById('contact-form');
    const emailField = document.getElementById('email');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

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
            mostrarAlertaContacto('empty');
            return;
        }

        if (!emailValid) {
            mostrarAlertaContacto('invalid');
            return;
        }

        // Enviar el formulario con EmailJS
        emailjs.sendForm('service_v0juf32', 'template_1ruuwyi', '#contact-form')
            .then(() => {
                mostrarAlertaContacto('success');
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                mostrarAlertaContacto('error');
            });
    });

    function mostrarAlertaContacto(tipo) {
        let title = '';
        let message = '';
        let showConfirmButton = true;
        let timer = null;
        let lottie = '';

        switch (tipo) {
            case 'empty':
                title = 'Campos incompletos';
                message = 'Por favor, completa todos los campos del formulario.';
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'invalid':
                title = 'Correo inválido';
                message = 'Ingresa un correo electrónico válido.';
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'success':
                title = '¡Mensaje enviado!';
                message = 'Nos pondremos en contacto contigo pronto.';
                lottie = 'https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie';
                showConfirmButton = false;
                timer = 4000;
                break;
            case 'error':
                title = 'Error al enviar';
                message = 'Hubo un problema al enviar tu mensaje. Intenta de nuevo.';
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
