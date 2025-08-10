// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos 
let amigos = [];    
//función para cambiar los titulos
function titulos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para agregar un amigo al array
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();
//validar que el camo no este vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre en el valido.");
        return; 
    }   
    //validar que el nombre no se repita
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya existe, por favor ingresa un nombre diferente.`);
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";
    //actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

//funcionn para actualizar la lista de amigos en la interfaz



//Funcion para seleccionar un amigo aleatorio

titulos("h1", "Bienvenido a el challenge amigo secreto");
titulos("h2", "Agrega los nombres y comienza el juego");
