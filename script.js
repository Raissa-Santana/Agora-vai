function sim() {
    alert("Você aceitou sair comigo, bora marcar logo po, e abre o video no youtube pfvr pq deu trabalho esse codigo!!")
    location.href = "https://www.youtube.com/watch?v=785bHsX_O-A";
}

function desviar() {
    console.log("opa, desviei")
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
