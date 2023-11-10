

function trocaImg(){
    console.log("Hello World!");
    let imagemAtual = document.querySelector('img');
    if(controle === 0){
        imagemAtual.src = "desjoinha.png";
        controle = 1;
    }
    else{
        controle = 0;
        imagemAtual.src = "joinha.jpg";
    }

}

const button = document.querySelector('button');
let controle = 0;
button.addEventListener('click', trocaImg);