var control;
function setup() {
  createCanvas(windowWidth,windowHeight);
control=createSprite(windowWidth-200,windowHeight-200,40,40);
}

function draw() 
{
  background(30);
if(keyDown(UP_ARROW)){
control.position.y=control.position.y-2;
}
  drawSprites();
}




