let amigos = [];

function adicionarAmigo() {
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Opa! Você esqueceu de digitar um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já está na lista. Tente novamente!');
        campoAmigo.value = '';
        return;
    }

    amigos.push(nomeAmigo);
    campoAmigo.value = '';
    campoAmigo.focus();

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É preciso ter pelo menos duas pessoas para a brincadeira começar!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `E o amigo secreto é... <strong>${amigoSorteado}</strong>!`;
}