//Pato
let xPato = 140;
let yPato = 360;
let colisao = false;
let meusPontos = 0;

function mostraPato(){
  image(imagemDoPato, xPato, yPato, 40, 40)
  

  
}
function movimentaPato(){
  if (keyIsDown(UP_ARROW)){
    yPato -= 4;
}
    if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover())
    yPato += 4;
    
}
}

function verificaColisao(){
  for (let i = 0; i < imagemDoCars.length; i++){
    colisao = collideRectCircle(xcars[i], ycars[i], wcar, hcar, xPato, yPato, 20)
    if (colisao){
      voltaPatoParaPosicaoInicial();
    if (meusPontos > 0){
      meusPontos -=1;
}
}
}
}

function voltaPatoParaPosicaoInicial(){
  yPato = 358;
}

function contarPoints(){
  text(meusPoints, width /5, 60);
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(22);
  fill(color(147,112,219))
  rect(139,6,42,24);
  fill(color(255, 240, 60))
  text(meusPontos, width /5, 26);
}

function marcaPonto(){
  if (yPato < 13){
    meusPontos += 1;
    voltaPatoParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function podeSeMover(){
    return yPato6;
}

function podeSeMover(){
  return yPato < 360;
} 


