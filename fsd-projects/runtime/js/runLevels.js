var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 400;
    sawBladeHitZone.y = groundY - 50;
    game.addGameItem(sawBladeHitZone);
    

    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.rotationalVelocity = 10;
    sawBladeHitZone.velocityX = -3; 
    sawBladeHitZone.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };
    sawBladeHitZone.onProjectileCollision = function () {
      game.increaseScore(2000);
      sawBladeHitZone.fadeOut();
    };
   
    var enemy = game.createGameItem("enemy",25);
    var redSquare = draw.bitmap("img/goblin.png");
    redSquare.x = -65;
    redSquare.y = -60;
    redSquare.scaleX = 0.25;
    redSquare.scaleY = 0.25;
    enemy.addChild(redSquare);
    enemy.x = 800;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);
    enemy.velocityX = -3;
    enemy.onPlayerCollision = function() {
      game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function() {
      game.increaseScore(1000);
      enemy.shrink();
    };
    var reward = game.createGameItem("reward",25);
    var greenSquare = draw.bitmap("img/elixir.png");
    greenSquare.x = -25;
    greenSquare.y = -47;
    greenSquare.scaleX = 0.3;
    greenSquare.scaleY = 0.3;
    reward.addChild(greenSquare);
    reward.x = 1200;
    reward.y = groundY - 60;
    game.addGameItem(reward);
    reward.velocityX = -3;
    reward.onPlayerCollision = function() {
      game.increaseScore(1000);
      reward.shrink();
    };
    reward.onProjectileCollision = function() {
      game.increaseScore(1000);
      reward.shrink();
    };
      createMarker(1800);
    function createMarker(x) {
      var marker = game.createGameItem("marker",25);
      var yellowSquare = draw.rect(50,90,"yellow");
      yellowSquare.x = -25;
      yellowSquare.y = -25;
      marker.addChild(yellowSquare);
      marker.x = x;
      marker.y = groundY - 50;
      game.addGameItem(marker);
      marker.velocityX = -3;
      marker.onPlayerCollision = function() {
        game.increaseScore(1000);
      };
      marker.onProjectileCollision = function() {
        game.increaseScore(1000);
      };
    }
     

   
      
  

    // DO NOT EDIT CODE BELOW HERE
    // BEGIN EDITING YOUR CODE HERE
    

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
    


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
