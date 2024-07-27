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