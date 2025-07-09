function captura() {
    var variables = window.location.search;
    var urlParams = new URLSearchParams(variables);
    var N = urlParams.get("nombre");
    var B = urlParams.get("B");
    var titulo = document.getElementById("bie");

    // Verificación de acceso directo sin parámetros
    if(variables == "") {
        alert("Acceso no autorizado");
        window.location = "index.html";
    } else {
        // Verificación de parámetros B (1: admin, 2: usuario)
        if(B == "1" || B == "2") {
            titulo.innerHTML = "Bienvenido " + N;
            console.log("Acceso concedido a: " + N + " (Nivel " + B + ")");
        } else {
            alert("Credenciales inválidas");
            window.location = "index.html";
        }
    }
}