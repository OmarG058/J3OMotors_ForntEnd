fetch("Header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("Header").innerHTML = data;
})
.catch(error => console.error("Error cargando el header:", error));

