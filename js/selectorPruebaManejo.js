// Mapa de vehículos e imágenes

document.addEventListener("DOMContentLoaded", () => {
    // Código aquí
    const vehicleImages = {
        colorado: "../img/Pickup/2024-colorado-jellybean.avif",
        cheyenne: "../img/Pickup/cheyenne-bison-jellybean.avif",
        aveo: "../img/Sedan/2025-aveo-sedan-jellybean-v2.avif",
        vdrive: "../img/Sedan/nissan-2024-v_drive-d.jpg.ximg.l_3_m.smart.jpg",
        versa: "../img/Sedan/nissan-2024-versa-.jpg",
        gti: "../img/Hastchback/Volkswagen GTI.png",
    };
    
    // Obtener elementos del DOM
    const vehicleSelect = document.getElementById("vehicleSelect");
    const vehicleImage = document.getElementById("vehicleImage");
    
    // Manejar el evento de cambio
    vehicleSelect.addEventListener("change", () => {

        const selectedVehicle = vehicleSelect.value; // Obtener valor seleccionado
        if (vehicleImages[selectedVehicle]) {
            vehicleImage.src = vehicleImages[selectedVehicle]; // Actualizar imagen
            vehicleImage.alt = `Imagen de ${selectedVehicle}`; // Cambiar texto alternativo
        } else {
            vehicleImage.src = "../img/Pickup/silverado-jellybean.avif"; // Imagen predeterminada
            vehicleImage.alt = "Selecciona un vehículo";
        }
    });
    
});