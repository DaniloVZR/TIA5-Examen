const form = document.getElementById('registroForm');
    const mensajeExito = document.getElementById('mensajeExito');

    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      // Validación de fecha de nacimiento
      const fechaNacimiento = document.getElementById('fechaNacimiento');
      const hoy = new Date().toISOString().split('T')[0];
      if (fechaNacimiento.value > hoy) {
        fechaNacimiento.setCustomValidity('La fecha de nacimiento no puede ser futura.');
        fechaNacimiento.classList.add('is-invalid');
      } else {
        fechaNacimiento.setCustomValidity('');
        fechaNacimiento.classList.remove('is-invalid');
      }

      form.classList.add('was-validated');

      if (!form.checkValidity()) {
        return;
      }

      // Crear objeto de datos
      const datos = {
        identificacion: document.getElementById('identificacion').value,
        nombresApellidos: document.getElementById('nombresApellidos').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        genero: document.getElementById('genero').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        redesSociales: document.getElementById('redesSociales').value
      };

      try {
        // Simulación de envío a servidor
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos)
        });

        if (response.ok) {
          mensajeExito.textContent = `✅ Formulario enviado correctamente. Código de estado: ${response.status}`;
          mensajeExito.classList.remove('d-none');
          form.reset();
          form.classList.remove('was-validated');
        } else {
          mensajeExito.textContent = `❌ Error al enviar el formulario. Código de estado: ${response.status}`;
          mensajeExito.classList.remove('d-none');
          mensajeExito.classList.replace('alert-success', 'alert-danger');
        }
      } catch (error) {
        mensajeExito.textContent = `❌ Error de red al enviar el formulario.`;
        mensajeExito.classList.remove('d-none');
        mensajeExito.classList.replace('alert-success', 'alert-danger');
      }
    });