let listaDeAmigos = []

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    let chute = document.getElementById('amigo');
    chute.value = '';
}

function adicionarAmigo(){
    let amigos = document.getElementById('amigo').value;
    if(amigos === '' || !isNaN(amigos) === true){
        exibirTexto('h2', 'Dados Invalidos!')
    } else {    
        exibirTexto('h2', 'Digite o nome dos seus amigos');
        listaDeAmigos.push(amigos);
        atualizarListaAmigos();
        limparCampo();
    }
}

function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(listaDeAmigos.length < 2){
        exibirTexto('h2','Adicione pelo menos 2 Amigos Para Fazer o Sorteio!')   
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    let lista = document.getElementById('resultado');
    lista.innerHTML = 'O Amigo Sorteado é: '+ amigoSorteado;
}
