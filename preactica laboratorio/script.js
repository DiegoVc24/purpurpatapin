var usuarios = [
    {id: 1, nombre: "diego", pass: "abc", tipo: "admin", edad: 18},
    {id: 2, nombre: "leopoldo", pass: "1234", tipo: "usuario", edad: 16},
    {id: 3, nombre: "mayrim", pass: "123", tipo: "usuario", edad: 15},
    {id: 4, nombre: "carlos", pass: "Iguna", tipo: "usuario", edad: 15},
    {id: 5, nombre: "Ernesto", pass: "Pollo", tipo: "usuario", edad: 2}
];

// Variable global para usuario que inician sesion
var usuarioActual = {nombre: "", pass: "", tipo: "" };

function aceptar() {
    var U = document.getElementById("user").value;
    var P = document.getElementById("pass").value;
    V = true; // Reiniciamos la variable

    for(let i = 0; i < usuarios.length; i++) {
        if(U == usuarios[i].nombre && P == usuarios[i].pass) {
            V = false;
            if(usuarios[i].edad > 17) {
                window.location = "admin.html?nombre=" + usuarios[i].nombre + "&B=1";
            } else {
                window.location = "usuario.html?nombre=" + usuarios[i].nombre + "&B=2";
            }
        }
    }

    if(V) {
        alert("Usuario y/o contraseña incorrecta.");
        window.location = "index.html";
    }
}

function LlenarTabla() {
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for(var i = 0; i < usuarios.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        if(i % 2 == 0) {
            tr.className = "par";
        } else {
            tr.className = "non";
        }

        td1.innerHTML = usuarios[i].nombre;
        td2.innerHTML = usuarios[i].tipo;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tabla.appendChild(tr);
    }
}
