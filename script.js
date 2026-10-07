const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    botaoCurtir.addEventListener("click", curtir);
    let curtiu = false;

    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        let numeroAtual = parseInt(contador.textContent);

        if (curtiu === false) {
            contador.textContent = numeroAtual + 1;
            curtiu = true;
        } else {
            contador.textContent = numeroAtual - 1;
            curtiu = false;
        }
    }
});