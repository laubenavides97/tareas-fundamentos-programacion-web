window.addEventListener('load', init, false);

function init() {
    emailjs.init("Bq4g2t3PbX0tAxDl6");

    function mostrarAlerta(tipo) {
        const lang = document.documentElement.lang;
    
        let title = '';
        let message = '';
        let showConfirmButton = true;
        let timer = null;
        let lottie = '';
    
        switch (tipo) {
            case 'empty':
                title = translations[lang]['empty_title'];
                message = translations[lang]['empty_email'];
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'invalid':
                title = translations[lang]['invalid_title'];
                message = translations[lang]['invalid_email'];
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
                break;
            case 'success':
                title = translations[lang]['success_email'];
                message = '';
                showConfirmButton = false;
                timer = 4000;
                lottie = 'https://lottie.host/f4963d62-236a-4d3a-9aa4-a14c02ea2124/TzmmnEU4Qt.lottie';
                break;
            case 'error':
                title = translations[lang]['error_email'];
                message = '';
                showConfirmButton = false;
                timer = 4000;
                lottie = 'https://lottie.host/f7f2093e-c0f6-4b32-8ee4-eca207002d8e/E88K7wCt3o.lottie';
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
            confirmButtonText: showConfirmButton ? translations[lang]['retry_button'] : undefined,
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

    function cleanInputs() {
        email.value = '';
    }

    let email = document.getElementById('inscriptionEmail');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick = function () {
        const correo = email.value.trim();
        const lang = document.documentElement.lang;
    
        if (correo === '') {
            mostrarAlerta('empty');
        } else if (!expressionEmail.test(correo)) {
            mostrarAlerta('invalid');
        } else {
            emailjs.sendForm('service_boletin', 'template_2t6ro4d', '#formSuscripcion')
                .then(() => {
                    mostrarAlerta('success');
                    cleanInputs();
                })
                .catch((error) => {
                    mostrarAlerta('error');
                    console.error('Error:', error);
                });
        }
    }
    
}
