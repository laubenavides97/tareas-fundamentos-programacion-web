// Asumiendo que ya has cargado EmailJS correctamente

document.getElementById('btnSend').addEventListener('click', function () {
  // Capturar los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('primer_apellido').value;
  const correo = document.getElementById('correo_electronico').value;
  const telefono = document.getElementById('telefono').value;
  const titular = document.getElementById('titular_tarjeta').value;
  const numeroTarjeta = document.getElementById('numero_tarjeta').value;
  const fechaVencimiento = document.getElementById('fecha_vencimiento').value;

  // Validación de campos (puedes agregar más validaciones según lo necesites)
  if (!nombre || !apellido || !correo || !telefono || !titular || !numeroTarjeta || !fechaVencimiento) {
      alert("Por favor complete todos los campos.");
      return;
  }

  // Crear el objeto con los datos para el template de EmailJS
  const formData = {
      user_name: nombre + " " + apellido,
      user_email: correo,
      user_phone: telefono,
      payment_holder: titular,
      payment_card_number: numeroTarjeta,
      payment_expiry_date: fechaVencimiento,
  };

  // Enviar el correo con EmailJS
  emailjs.send('service_boletin', 'template_ltmsb4q', formData)
      .then(function(response) {
          console.log('Correo enviado exitosamente', response);
          // Puedes mostrar un mensaje de éxito al usuario
          document.getElementById('alertaForm').innerHTML = "¡Tu reserva ha sido confirmada y el resumen enviado a tu correo!";
      }, function(error) {
          console.log('Error al enviar correo:', error);
          // Mostrar un mensaje de error
          document.getElementById('alertaForm').innerHTML = "Hubo un problema al enviar el correo. Intenta nuevamente.";
      });
});
