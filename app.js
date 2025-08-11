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
function actualizarLista (){
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    // Recorrer el array de amigos con un ciclo for
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigo [i]; // Asignar el nombre del amigo al elemento
        listaAmigos.appendChild(li); // Agregar el elemento a la lista
    };
}


//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) { // Si no hay amigos, mostrar un mensaje
        alert("No hay amigos para sortear. Por favor, agrega nombres primero.");
        return;
        // Seleccionar un amigo aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //obtener el nombre del amigo sorteado
        let amigoSorteado = amigos[indiceAleatorio];
        // Mostrar el nombre del amigo sorteado
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}


titulos("h1", "Bienvenido a el challenge amigo secreto");
titulos("h2", "Agrega los nombres y comienza el juego");
