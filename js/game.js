var game = new Phaser.Game(1600, 900, Phaser.AUTO, '', {
  preload: preload, create: create, update: update
});

var player;

var wKey;
var aKey;
var sKey;
var dKey;

function preload() {
  game.load.image('background', 'assets/sky.png');
  game.load.image('player', 'assets/star.png');
};

function create() {
  game.add.sprite(0, 0, 'background');
  player = game.add.sprite(0,0, 'player');
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
