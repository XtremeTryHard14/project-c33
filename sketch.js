const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg,snow;

function preload(){
    backgroundImg = "snow3.jpg"

}

function setup() {
 var canvas = createCanvas(800,400);
 engine = Engine.create();
  createSprite(400, 200, 50, 50);
}

function draw() {
  if (backgroundImg)
  background(backgroundImg);

}