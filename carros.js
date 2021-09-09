//
let xcars = [900, 900, 900, 900, 900, 900];
let ycars = [37, 145, 94, 210, 260, 305];
let velocidadeCars =  [3, 4, 3.5, 3.5, 4, 4.5];
let wcar = 50;
let hcar = 40;


function mostraCarro(){
    for(let i = 0; i < imagemDoCars.length; i++){
  image(imagemDoCars[i], xcars[i], ycars[i], wcar, hcar);
  }
}

function movimentaCar(){
    for(let i = 0; i < imagemDoCars.length; i++){
        xcars[i] -= velocidadeCars[i];
        }
}

function voltaposicaoInicialDoCar(){
    for(let i = 0; i < imagemDoCars.length; i++){
        if(passouTodaATela(xcars[i])){
                xcars[i] = 900;
        }
    }
}

function passouTodaATela(xCar){
    return xCar < - 50;
}

