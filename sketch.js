var hour,min,sec;
var scAngle,hrAngle,mnAngle;
var v,var1

function preload() {
  var1=loadImage("Untitled-2.png")
}
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);

 

  
}

function draw() {
  background(255,255,255); 

hr=hour();
min=minute();
sec=second();

scAngle=map(sec,0,60,0,360);
mnAngle=map(min,0,60,0,360);
hrAngle=map(hr,0,12,0,360);

v=createSprite(200, 200, 50, 50);
v.scale=2
v.addImage(var1)
push();
  fill(275);

  

translate(200,200)
rotate (-90);

 
strokeWeight(8);
stroke("red");
noFill();
var hand = map(sec,0,60,0,360);
arc(0,0,300,300,0,hand);

stroke("green");
var hand2 = map(min,0,60,0,360);
arc(0,0,280,280,0,hand2);

stroke("blue");
var hand3 = map(hr%12,0,12,-0,360);
arc(0,0,260,260,0,hand3);

push();
rotate(hand);
stroke("red");
line(0,0,100,0);
pop();


push();
rotate(hand2);
stroke("green");
line(0,0,75,0);
pop();

push();
rotate(hand3);
stroke("blue");
line(0,0,50,0);
pop();

stroke("Black");
point (0,0);

 pop();
  drawSprites();
}