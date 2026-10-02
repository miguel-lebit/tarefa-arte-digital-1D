const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    botaoCurtir.addEventListener("click", alternarCurtida);

    function alternarCurtida() {
        const contador = botaoCurtir.querySelector("span");
        let quantidade = Number(contador.textContent);

        // Sempre soma +1 a cada clique
        contador.textContent = quantidade + 1;
    }   
});
