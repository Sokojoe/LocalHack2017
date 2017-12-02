var Game = {};


Game.init = function(){
    game.stage.disableVisibilityChange = true;
};

Game.preload = function() {
    game.load.tilemap('map', 'assets/map/example_map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet('tileset', 'assets/map/tilesheet.png',32,32);
    game.load.image('sprite','assets/sprites/sprite.png');
};

Game.create = function(){
    Game.playerMap = {};
    var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    testKey.onDown.add(Client.sendTest, this);

    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    wKey.onDown.add(Game.moveUp, this);
    // aKey.onDown.add(moveLeft, this);
    // sKey.onDown.add(moveDown, this);
    // dKey.onDown.add(moveRight, this);
    

    var map = game.add.tilemap('map');
    map.addTilesetImage('tilesheet', 'tileset'); // tilesheet is the key of the tileset in map's JSON file
    var layer;
    for(var i = 0; i < map.layers.length; i++) {
        layer = map.createLayer(i);
    }
    layer.inputEnabled = true; // Allows clicking on the map ; it's enough to do it on the last layer
    layer.events.onInputUp.add(Game.getCoordinates, this);
    Client.askNewPlayer();
};

Game.getCoordinates = function(layer,pointer){
    Client.sendClick(pointer.worldX,pointer.worldY);
};



// wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
// wKey.onDown.add(moveUp, this);

// aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
// aKey.onDown.add(moveLeft, this);

// sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
// sKey.onDown.add(moveDown, this);

// dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
// dKey.onDown.add(moveRight, this);

// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.W);
// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.A);
// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.S);
// game.input.keyboard.removeKeyCapture(Phaser.Keyboard.D);


Game.moveUp = function() {
    Client.getcod();
    Game.getKBCoordinates = function(Coordinates) {
        var speed = 1;
        var speed_multiplier = 1;
        var currID = Coordinates.id;
        var currX = Coordinates.x;
        var currY = Coordinates.y;
        Client.sendClick(currX, currY + speed * speed_multiplier); 
    };
     
}

Game.addNewPlayer = function(id,x,y){
    Game.playerMap[id] = game.add.sprite(x,y,'sprite');
};

Game.movePlayer = function(id,x,y){
    var player = Game.playerMap[id];
    var distance = Phaser.Math.distance(player.x,player.y,x,y);
    var tween = game.add.tween(player);
    var duration = distance*10;
    tween.to({x:x,y:y}, duration);
    tween.start();
};

Game.removePlayer = function(id){
    Game.playerMap[id].destroy();
    delete Game.playerMap[id];
};
