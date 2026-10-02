const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    botaoCurtir.addEventListener("click", curtir);
    let curtiu = false;

    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        if (curtiu === false){
                contador.textContent++;
curtiu = true;}
else{
contador.textContent--;
curtiu = false
  }
 }
});