window.addEventListener("load", function() {
    fetch("Footer.html")
    .then(response => response.text())
    .then(data => {
        // Insertar el contenido del footer en el contenedor
        document.getElementById("Footer").innerHTML = data;

        // Asegurarse de que el footer se haga visible con una transición suave
        document.getElementById("Footer").classList.add("loaded");
    })
    .catch(error => console.error("Error cargando el footer:", error));
});