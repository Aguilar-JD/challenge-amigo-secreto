// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//función para cambiar los titulos
function titulos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
}
// Función para agregar un amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no se repita
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya existe, por favor ingresa uno diferente.`);
        return;
    }

    // Agregar al array
    amigos.push(nombreAmigo);

    // Limpiar el input
    inputAmigo.value = "";

    // Actualizar lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista actual

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigo secreto y eliminarlo del array
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay más amigos para sortear.");
        return;
    }

    // Escoger índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Eliminar del array
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista de participantes
    actualizarLista();
}
titulos("h1", "Bienvenido a el challenge amigo secreto");
titulos("h2", "Agrega los nombres y comienza el juego");
