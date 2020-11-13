var basketball , basket , court ;
var basketball_img , basket_img , court_img;


function preload(){
  basketball_img = loadImage("Basketball.jpg");
  basket_img = loadImage("Basket.jpg");
  court_img = loadImage("Basket ball court.jpg");

}



function setup() {
  createCanvas(1200,680);
  

  court = createSprite(600,550,1000,1500);
  court.addImage(court_img);



  basketball = createSprite(600,600,10,10);
  basketball.addImage(basketball_img);
  basketball_img.scale = 0.5;
  

  basket = createSprite(600,130,10,10);
  basket.addImage(basket_img);
}

function draw() {
  background(0);  
  drawSprites();
}