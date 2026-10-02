const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    let curtiu = false; 

    botaoCurtir.addEventListener("click", alternarCurtida);

    function alternarCurtida() {
        const contador = botaoCurtir.querySelector("span");
        let quantidade = Number(contador.textContent);

        if (curtiu === false) {
            contador.textContent = quantidade + 1; // Adiciona a curtida
            curtiu = true;
        } else {
            contador.textContent = quantidade - 1; // Remove a curtida ao clicar de novo
            curtiu = false;
        }
    }   
});
