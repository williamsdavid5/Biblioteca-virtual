function pesquisar() {
}

function editar() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <input type="text" placeholder="nome do livro">
            <div id="buttons">
                <button id="Confirmar">Confirmar</button>
                <button id="Cancelar" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}

function apagar() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <label for="">Excluir "nome do livro"?</label>
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

function novo() {
    var confirma = `<div id="confirma">
        <div id="confirmaContainer">
            <input type="text" placeholder="nome do livro">
            <div id="buttons">
                <button id="Confirmar">Confirmar</button>
                <button id="Cancelar" onclick="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>`;

    var containerTemporario = document.createElement('div');
    containerTemporario.innerHTML = confirma;
    document.body.appendChild(containerTemporario.firstElementChild);
}