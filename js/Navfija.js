let prevScrollpos = window.pageYOffset; // Captura la posición inicial del scroll
const header = document.querySelector(".header"); // Selecciona tu header

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset; // Posición actual del scroll

    if (prevScrollpos > currentScrollPos) {
        // Scroll hacia arriba
        header.style.top = "0"; // Muestra el menú
    } else {
        // Scroll hacia abajo
        header.style.top = `-${header.offsetHeight}px`; // Oculta el menú (altura dinámica)
    }

    prevScrollpos = currentScrollPos; // Actualiza la posición anterior
});