document.addEventListener('DOMContentLoaded', function() {
    // Obtener el campo de financiamiento y los nuevos campos
    const financiamientoSelect = document.getElementById('financiamiento');
    const engancheField = document.getElementById('engancheField');
    const plazosField = document.getElementById('plazosField');

    // Función para mostrar/ocultar los campos según la selección
    financiamientoSelect.addEventListener('change', function() {
        if (financiamientoSelect.value === 'si') {
            engancheField.style.display = 'block';  // Mostrar campos
            plazosField.style.display = 'block';
        } else {
            engancheField.style.display = 'none';  // Ocultar campos
            plazosField.style.display = 'none';
        }
    });
});