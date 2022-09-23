let totalslides = document.querySelectorAll('.slide--item').length;
let currentSlide = 0;
document.querySelector('.slide--width').style.width = `calc(100vw*${totalslides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function voltar() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalslides -1;
    }
    updateMargin(); 
}

function proximo() {
    currentSlide++;
    if(currentSlide>(totalslides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function  updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slide--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(proximo, 5000);