
const livros = resgatarLivros();

carregarLista();

function salvarLivros(livros) {
    localStorage.setItem('livros', JSON.stringify(livros));
}

function resgatarLivros() {
    return JSON.parse(localStorage.getItem('livros')) || [];
}

function carregarLista() {
    let novaLi = '';

    livros.forEach((livro, index) => {
        novaLi += `<div class="divLi">
                    <li>${livro.nome}</li>
                    <img src="/img/editar.png" id="editar" onclick="editar(${index})">
                    <img src="/img/apagar.png" id="apagar" onclick="apagar(${index})">
                </div>`;
    });

    const lista = document.querySelector('ul');
    lista.innerHTML = novaLi;

}

function pesquisar() {
    const nome = document.getElementById("inputPesquisa").value;

    let novaLi = '';

    livros.forEach((livro, index) => {

        if (livro.nome.toLowerCase().includes(nome.toLowerCase())) {
            novaLi += `<div class="divLi">
            <li>${livro.nome}</li>
            <img src="/img/editar.png" id="editar" onclick="editar(${index})">
            <img src="/img/apagar.png" id="apagar" onclick="apagar(${index})">
        </div>`;
        }

    });

    const lista = document.querySelector('ul');
    lista.innerHTML = novaLi;
}

function inputVazio() {

    const valorInput = document.getElementById("inputPesquisa").value;

    if (valorInput == '') {
        carregarLista();
    }

}

function editar(index) {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <input type="text" placeholder="nome do livro" id="inputEditarNome" value="${livros[index].nome}">
            <div id="buttons">
                <button id="Confirmar" onclick="editarLivro(${index})">Confirmar</button>
                <button id="Cancelar" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function editarLivro(index) {
    const novoNome = document.getElementById("inputEditarNome").value;

    if (novoNome) {
        livros[index].nome = novoNome;
        salvarLivros(livros);
    }

    cancelar();
    carregarLista();
}

function apagar(index) {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <label for="">Excluir "${livros[index].nome}"?</label>
            <div id="buttons">
                <button id="Confirmar" onclick = "excluir(${index})">Confirmar</button>
                <button id="Cancelar" onclick = "cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function excluir(index) {
    livros.splice(index, 1);
    salvarLivros(livros);
    cancelar();
    carregarLista();
}

function cancelar() {
    var confirma = document.getElementById("confirma");
    if (confirma) {
        confirma.remove();
    }
}

function novo() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <input type="text" placeholder="nome do livro" id = "inputNomeLivro">
            <div id="buttons">
                <button id="Confirmar" onclick = "inserirLivro()">Confirmar</button>
                <button id="Cancelar" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function inserirLivro() {
    const nomeLivro = document.getElementById("inputNomeLivro").value;

    if (nomeLivro) {
        const novoLivro = {
            nome: nomeLivro,
            disponivel: true
        };

        livros.push(novoLivro);
        salvarLivros(livros);
    }
    carregarLista();
    cancelar();
}

/*
function novoLivro() {
    const nomeLivro = document.getElementById("inputNomeLivro").value;
    const novoLivro = {
        nome: nomeLivro,
        disponivel: true
    };

    livros.push(novoLivro);

    cancelar();

    var newLi = `<div class="divLi">
                    <li>${novoLivro.nome}</li>
                    <img src="/img/editar.png" id="editar" onclick="editar()">
                    <img src="/img/apagar.png" id="apagar" onclick="apagar()">
                </div>`;

    var ul = document.querySelector('ul');
    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = newLi;
    ul.appendChild(containerTemporario.firstElementChild);
}
    */