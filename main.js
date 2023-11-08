function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){  
    const Tecla = listaDeTeclas{contador};
    const idAudio = "#som_"+efeito;
    Tecla.onclick = function (){
        tocaSom(idAudio);
    }
    