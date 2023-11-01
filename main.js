const aplausos = document.querySelector("#som_tecla_aplausos");

let controle="tocar"

if(controle=="tocar"){
    alert("audio pronto para tocar")
}else {
    alert("o audio nao esta pronto")
}

function tocaSom(som){
    alert(som)
}

tocaSom("clap, clap, clap")



