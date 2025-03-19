document.addEventListener("DOMContentLoaded", function () {
       // Validar formulario antes de enviarlo
       document.querySelector(".boton-E").addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir el envío del formulario por defecto

        const estado = document.getElementById("estado").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const distribuidor = document.getElementById("distribuidor").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fecha = document.getElementById("fecha").value.trim();
        const horario = document.querySelector('input[name="horario"]:checked');

        // Array para almacenar campos vacíos
        const missingFields = [];

        if (!estado) missingFields.push("Estado");
        if (!ciudad) missingFields.push("Ciudad o Zona");
        if (!distribuidor) missingFields.push("Distribuidor");
        if (!nombre) missingFields.push("Nombre");
        if (!apellido) missingFields.push("Apellido");
        if (!correo) missingFields.push("Correo");
        if (!telefono) missingFields.push("Teléfono");
        if (!fecha) missingFields.push("Fecha");
        if (!horario) missingFields.push("Horario");

        // Mostrar advertencia si hay campos vacíos
        if (missingFields.length > 0) {
            alert(`Por favor completa los siguientes campos: \n${missingFields.join(", ")}`);
        } else {
            alert("Formulario enviado correctamente");
            // Aquí puedes enviar el formulario si todos los campos están completos
            e.target.closest("form").submit(); // Enviar el formulario
        }
    });
});