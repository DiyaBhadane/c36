var backgroundImage, database;
var position;
var playerCount;
var form,player,game;
var gameState = 0

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  
}