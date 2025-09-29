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
      console.log("The saw blade hit Halle");
      game.changeIntegrity(-10);
    };
    sawBladeHitZone.onProjectileCollision = function () {
      console.log("Halle has hit the saw blade");
      game.increaseScore(100);
      sawBladeHitZone.fadeOut();
    };

    var boxHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    boxHitZone.x = 800;
    boxHitZone.y = groundY - 25;
    game.addGameItem(boxHitZone);

    var boxImage = draw.bitmap("img/box.png");
    boxHitZone.addChild(boxImage);
    boxImage.x = -25;
    boxImage.y = -25;
    boxHitZone.velocityX = -3;
    boxHitZone.onPlayerCollision = function () {
      console.log("The box hit Halle");
      game.changeIntegrity(-10);
    };
    boxHitZone.onProjectileCollision = function () {
      console.log("Halle has hit the box");
      game.increaseScore(100);
      boxHitZone.fadeOut();
    };

    var enemy = game.createGameItem("enemy", 25);
    var enemyImage = draw.bitmap("img/enemy.png");
    enemy.addChild(enemyImage);
    enemy.x = 1200;
    enemy.y = groundY - 50;
    enemy.velocityX = -3;
    game.addGameItem(enemy);
    enemy.onPlayerCollision = function () {
      console.log("The enemy has hit Halle");
      game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function () {
      console.log("Halle has hit the enemy");
      game.increaseScore(100);
      enemy.shrink();
    };

    var reward = game.createGameItem("reward", 25);
    var rewardImage = draw.bitmap("img/reward.png");
    reward.addChild(rewardImage);
    reward.x = 2000;
    reward.y = groundY - 50;
    reward.velocityX = -3;
    game.addGameItem(reward);
    reward.onPlayerCollision = function () {
      console.log("Halle has collected the reward");
      game.increaseScore(1000);
      reward.fadeOut();
    };
    reward.onProjectileCollision = function () {
      console.log("Halle has hit the reward");
      game.increaseScore(1000);
      reward.fadeOut();
    }; 
     var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare); 
enemy.x = 1500;
enemy.y = groundY - 50;
enemy.velocityX = -3;
game.addGameItem(enemy);
enemy.onPlayerCollision = function () {
  console.log("The enemy has hit Halle");
  game.changeIntegrity(-10);
};
enemy.onProjectileCollision = function () {
  console.log("Halle has hit the enemy");
  game.increaseScore(100);
  enemy.shrink(); 
}; 
   enemy.rotationalVelocity = 9;

    // DO NOT EDIT CODE BELOW HERE
    // BEGIN EDITING YOUR CODE HERE
    

    function startLevel() {
      // TODO 13 goes below here
      console.log("Level " + (currentLevel + 1));
      var level = levelData[currentLevel];
      game.setLevel(level);
      game.setSpeed(level.speed);
      
    


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
