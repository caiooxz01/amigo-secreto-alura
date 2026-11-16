let participantes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (participantes.includes(nome)) {
        alert('nome ja existente, digite um sobrenome');
        return;
    } else if (nome == '') {
        alert('Nome vazio, digite um nome válido.');
        return;
    } else {
        participantes.push(nome);
    }
    let amigosIncluidos = document.getElementById('lista-amigos');
    amigosIncluidos.textContent = participantes.join(', ');
    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    let embaralhamento = [...participantes];
    let sorteio = embaralhar(embaralhamento);
    let valido = sorteio.every((valor, indice) => {
        return valor !== participantes[indice];
    });
    while (valido == false) {
        sorteio = embaralhar(sorteio);
        valido = sorteio.every((valor, indice) => {
            return valor !== participantes[indice];
        });
    };

    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < sorteio.length; i++) {
        listaSorteio.innerHTML += `${participantes[i]} → ${sorteio[i]}<br>`
    }
};

function embaralhar(array) {
    for (let i = participantes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    };
    return array
};

function reiniciar() {
    participantes = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
};