 let xBolinha = 300;
 let yBolinha = 200;
 let dimensao = 20;
 let raio = dimensao /2
 
 let velocidadexBolinha =6;
 let velocidadeyBolinha =6;
     
 let xRaquete = 5;
 let yRaquete = 150;

 let larguraRaquete = 5; 
 let alturaRaquete = 90;     

 let xRaqueteinimiga = 585;
 let yRaqueteinimiga = 150;

 let velocidadeYoponente;
 
 let colidiu = false; 

 let meusPontos = 0;
 let pontosInimigo =0;

  function preload (){
  trilha = loadSound("trilhajord.mp3")
  raquete = loadSound("raquetada.mp3 ")
  ponto = loadSound("ponto.mp3")
  }

function setup() {
  createCanvas(600, 400);
  trilha.play()
}
function draw() {
background(0);
mostraBolinha();
mostraRaquete();
movimentoBolinha();
verificarBolinha();
movimentoRaquete();
mostraRaqueteinimiga();
movimentarRaqueteOponente();
colisaoRaquete(xRaquete,yRaquete);
colisaoRaquete(xRaqueteinimiga,yRaqueteinimiga);
incluiplacar();
marcaPontos();
}

function mostraBolinha(){

circle(xBolinha,yBolinha,dimensao)  
} 

function mostraRaquete(){
  
   rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete )
}

function movimentoBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificarBolinha(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0 ) 
    velocidadexBolinha *= -1;
  
  if(yBolinha + raio > height || yBolinha - raio < 0 ) 
    velocidadeyBolinha *= -1;
}
function movimentoRaquete(){
  
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5;
}

  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 5;}
}

function mostraRaqueteinimiga(){
  
  rect(xRaqueteinimiga,yRaqueteinimiga,larguraRaquete,alturaRaquete)
} 

function movimentarRaqueteOponente(){
    velocidadeYoponente = yBolinha - yRaqueteinimiga - alturaRaquete / 2 -30 ;
    yRaqueteinimiga += velocidadeYoponente
}

function colisaoRaquete(x,y){
  
  colidiu = 
    collideRectCircle(x,y,larguraRaquete,alturaRaquete,xBolinha,yBolinha,raio);
  
  if(colidiu){
     velocidadexBolinha *= -1;
    raquete.play()
  }
}

function incluiplacar(){
  textAlign(CENTER);
  textSize(16);
  stroke(255);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosInimigo,470,26,);

}


function marcaPontos(){
   if(xBolinha > 590){
     meusPontos += 1;
     ponto.play()
   }            
  if (xBolinha < 10){
   pontosInimigo += 1;
    ponto.play()
  }
  
}


































