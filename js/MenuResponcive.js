
document.addEventListener('DOMContentLoaded', function() {
    // Código para alternar el menú
    var btnMenu = document.querySelector('.btn-menu');
    var menu = document.querySelector('.navegacion');

    btnMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});