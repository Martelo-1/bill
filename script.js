function acessibilidade() {
    const menu = document.querySelector(".opcoesacessibilidade");
    if (menu) {
        const isHidden = menu.style.display === "none" || menu.style.display === "";
        menu.style.display = isHidden ? "flex" : "none";
    }
}

function aumentarFonte() {
    const body = document.body;
    const currentSize = window.getComputedStyle(body).fontSize;
    const newSize = parseFloat(currentSize) + 2;
    body.style.fontSize = newSize + "px";
}

function diminuirFonte() {
    const body = document.body;
    const currentSize = window.getComputedStyle(body).fontSize;
    const newSize = Math.max(parseFloat(currentSize) - 2, 10); // tamanho mínimo de 10px
    body.style.fontSize = newSize + "px";
}

function resetarFonte() {
    const body = document.body;
    body.style.fontSize = "16px";
}