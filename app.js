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
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent);

    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }

    const asignaciones = {};
    const disponibles = [...amigos];

    amigos.forEach(amigo => {
        let elegido;
        do {
            const indice = Math.floor(Math.random() * disponibles.length);
            elegido = disponibles[indice];
        } while (elegido === amigo);

        asignaciones[amigo] = elegido;
        disponibles.splice(disponibles.indexOf(elegido), 1);
    });

    let resultado = 'Resultados del sorteo:\n';
    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        resultado += `${amigo} → ${asignado}\n`;
    }

    alert(resultado);
}