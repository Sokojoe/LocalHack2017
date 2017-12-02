var gameAreax = 1200;
var gameAreay = 1000;
var game = new Phaser.Game(gameAreax, gameAreay, Phaser.AUTO, '', {
  preload: preload, create: create, update: update, render: render
});
var player;
var playerdiameter = 64;

var player;
var playerdiameter

var wKey;
var aKey;
var sKey;
var dKey;

function preload() {
  game.load.image('background', 'assets/sky.png');
  game.load.image('player', 'assets/star.png');
};

function create() {
  player = new Phaser.Circle(
    game.rnd.integerInRange(
      0 + (playerdiameter/2),gameAreax-(playerdiameter/2)),
      game.rnd.integerInRange(0+(playerdiameter/2),
      gameAreay-(playerdiameter/2)),
      playerdiameter);
};

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.A))
      {
          moveLeft();
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
      {
          moveRight();
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.W))
      {
          moveUp();
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
      {
          moveDown();
      }
};

function render(){
  game.debug.geom(player,'#FFFFFF');
}

function moveUp(){
  player.y--;
}

function moveDown(){
  player.y++;
}

function moveLeft(){
  player.x--;
}

function moveRight(){
  player.x++;
}
