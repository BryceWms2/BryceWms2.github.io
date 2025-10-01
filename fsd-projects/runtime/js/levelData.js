var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 450, y: groundY },
          { type: "sawblade", x: 625, y: groundY },
          { type: "sawblade", x: 915, y: groundY },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 425, y: groundY },
          { type: "sawblade", x: 615, y: groundY },
          { type: "sawblade", x: 950, y: groundY },
        ],   
      },   
    ];  
    name: levelData[1].name = "Robot Rampage";
    number: levelData[1].number = 2;
    speed: levelData[1].speed = -3;
    gameItems: levelData[1].gameItems = [
      { type: "sawblade", x: 425, y: groundY },
      { type: "sawblade", x: 615, y: groundY },
      { type: "sawblade", x: 950, y: groundY },
    ];
    window.opspark.levelData = levelData; 
  };   
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
