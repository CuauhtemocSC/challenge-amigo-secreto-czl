// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);

    input.value = '';
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = listaAmigos.getElementsByTagName('li');

    if (amigos.length === 0) {
        alert('No hay amigos en la lista.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[indiceAleatorio].textContent;
    
 
    listaAmigos.innerHTML = `<li>El amigo elegido es: ${amigoElegido}</li>`;
    //alert(`¡El amigo elegido es: ${amigoElegido}!`);
}
