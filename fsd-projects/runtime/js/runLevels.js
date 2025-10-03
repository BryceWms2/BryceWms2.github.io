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
    

    var obstacleImage = draw.bitmap("img/B.barrel.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.scaleX = 0.53;
    obstacleImage.scaleY = 0.53;
    obstacleImage.x = -55;
    obstacleImage.y = -50;
    sawBladeHitZone.rotationalVelocity = -2;
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
      game.increaseScore(2000);
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
      game.increaseScore(2000);
      reward.shrink();
    };
    reward.onProjectileCollision = function() {
      game.increaseScore(4000);
      reward.shrink();
    };
     

        createMarker(1800);
    function createMarker(x) {
      var marker = game.createGameItem("marker",25);
      var yellowSquare = draw.bitmap("img/crown.png");
      yellowSquare.x = -92;
      yellowSquare.y = -70;
     yellowSquare.scaleX = 0.7;
      yellowSquare.scaleY = 0.7;
      marker.addChild(yellowSquare);
      marker.x = x;
      marker.y = groundY - 50;
      game.addGameItem(marker);
      marker.velocityX = -3;
      marker.onPlayerCollision = function() {
        game.increaseScore(2000);
      };
      marker.onProjectileCollision = function() {
        game.increaseScore(2000);
      };
    }

      
   
     

   
      
  

    // DO NOT EDIT CODE BELOW HERE
    // BEGIN EDITING YOUR CODE HERE
    

    function startLevel() {
      // TODO 13 goes below here
     var level = levelData[currentLevel]; 
     var levelObjects = level.gameItems
     for(var i = 0; i < levelObjects.length; i++) {
      var gameItem = levelObjects[i];
      var itemX = gameItem.x;
      var itemY = gameItem.y;
      if(gameItem.type === "sawblade") {
        createSawBlade(itemX, itemY);
      }
      else if(gameItem.type === "enemy") {
        creatEnemy(itemX, itemY);
      }
      else if(gameItem.type === "reward") {
        createReward(itemX, itemY);
      }
      else if(gameItem.type === "marker") {
        createMarker(itemX, itemY);
      }
     }

    


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
