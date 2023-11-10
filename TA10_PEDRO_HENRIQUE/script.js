function trocaImg(event){
    const imagemAtual = event.currentTarget;
    //imagemAtual.removeEventListener('click', trocaImg);
    const closed = document.querySelector('#Fechado');
    const opened = document.querySelector('#Aberto');
    click++;
    const date = new Date().toLocaleString();
    if(aberta){
        const Qte = document.querySelector('#Fechado .Qte');
        Qte.textContent = "Vezes Clickadas = " + click.toString() + " Data da ultima clickada = " + date; 
        aberta = false;
        closed.classList.remove('hidden');
        opened.classList.add('hidden');

    }
    else{
        const Qte = document.querySelector('#Aberto .Qte');
        Qte.textContent = "Vezes Clickadas = " + click.toString() + " Data da ultima clickada = " + date;
        aberta = true;
        opened.classList.remove('hidden');
        closed.classList.add('hidden');
    }

}

const img1 = document.querySelector('#Fechado img');
const img2 = document.querySelector('#Aberto img');
let aberta = false;
let click = 0;
img1.addEventListener('click', trocaImg);
img2.addEventListener('click', trocaImg);