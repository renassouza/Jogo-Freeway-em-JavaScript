function setup() {
  createCanvas(800, 400); 
 
}

function draw() {
  background(imagemDaEstrada);
  mostraPato();
  mostraCarro();
  movimentaCar();
  movimentaPato();
  voltaposicaoInicialDoCar();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}


