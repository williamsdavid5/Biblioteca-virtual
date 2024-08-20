
let voltar = document.querySelector("#voltar");
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

        if (livro.disponivel) {
            novaLi += `<div class="divLi">
            <li>${livro.nome}</li>
            <label class="disponivel" onclick="confirma('Emprestar', ${index})">Disponível</label>
        </div>`;
        } else {
            novaLi += `<div class="divLi">
            <li>${livro.nome}</li>
            <label class="indisponivel" onclick="confirma('Devolver',${index})">Indisponível</label>
        </div>`;
        }


    });

    const lista = document.querySelector('ul');
    lista.innerHTML = novaLi;

}

function confirma(string, index) {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <label for="">${string} "${livros[index].nome}"?</label>
            <div id="buttons">
                <button id="Confirmar" onclick = "emprestarDevolver(${index})">Confirmar</button>
                <button id="Cancelar" onclick = "cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function cancelar() {
    var confirma = document.getElementById("confirma");
    if (confirma) {
        confirma.remove();
    }
}


function emprestarDevolver(index) {
    livros[index].disponivel = !livros[index].disponivel;
    carregarLista();
    cancelar();
    salvarLivros(livros);
}

function pesquisar() {
    const nome = document.getElementById("inputPesquisa").value;

    let novaLi = '';

    livros.forEach((livro, index) => {

        if (livro.nome.toLowerCase().includes(nome.toLowerCase())) {
            if (livro.disponivel) {
                novaLi += `<div class="divLi">
                <li>${livro.nome}</li>
                <label class="disponivel" onclick="confirma('Emprestar', ${index})">Disponível</label>
            </div>`;
            } else {
                novaLi += `<div class="divLi">
                <li>${livro.nome}</li>
                <label class="indisponivel" onclick="confirma('Devolver',${index})">Indisponível</label>
            </div>`;
            }
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

/*
function pesquisar() {
}

function devolver() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <label for="">Devolver "nome do livro"?</label>
            <div id="buttons">
                <button id="Confirmar">Confirmar</button>
                <button id="Cancelar" onclick = "cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function emprestar() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <label for="">Emprestar "nome do livro"?</label>
            <div id="buttons">
                <button id="Confirmar">Confirmar</button>
                <button id="Cancelar" onclick = "cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function cancelar() {
    var confirma = document.getElementById("confirma");
    if (confirma) {
        confirma.remove();
    }
}
*/