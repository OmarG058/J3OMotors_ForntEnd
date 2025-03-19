document.querySelector(".boton-E").addEventListener("click", function (e) {
    e.preventDefault();
    const confirmacion = confirm("¿Estás seguro de enviar el formulario?");
    if (confirmacion) {
        e.target.closest("form").submit();
    }
});