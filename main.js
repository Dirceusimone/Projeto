function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){    
    const Tecla = listaDeTeclas{contador};
    const idAudio = "#som_"+efeito;
    Tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;


