const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    let curtiu = false;

    botaoCurtir.addEventListener("click", function curtir() {
        const contador = botaoCurtir.querySelector("span");
        let numeroAtual = parseInt(contador.textContent) || 0;

        if (curtiu === false) {
            contador.textContent = numeroAtual + 1;
            curtiu = true;
        } else {
            contador.textContent = numeroAtual - 1;
            curtiu = false;
        }
    });
});