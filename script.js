const botoesCurtir = document.querySelectorAll(".Curtir");
botoesCurtir.forEach(function(botaoCurtir) {
    let curtir = false;
    botaoCurtir.addEventListener("Click", curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtir === false){
        contador.textContent++;
        curtiu = true;}
        else{
            contador.textContent--;
            curtiu = false;
        }
}   
});