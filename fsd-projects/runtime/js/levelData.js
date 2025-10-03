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
        name: "Arena 1",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: -55, y: groundY -50 },
           { type: "enemy", x: 800, y: groundY -50},
          { type: "reward", x: 1200, y: groundY -60},
          { type: "marker", x: -25, y: groundY -25 },
        ],
      },
      {
        name: "Aren 2",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: -55, y: groundY -50 },
          { type: "enemy", x: -65, y: groundY -60 },
          { type: "reward", x: 1200, y: groundY -60 },
          { type: "marker", x: 25, y: groundY -25 },
        ],
      },
      {
        name: "Arena 3",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 450, y: groundY -50 },
          { type: "enemy", x: -65, y: groundY -60 },
          { type: "reward", x: 915, y: groundY -60 },
          { type: "marker", x: 75, y: groundY -25 },

        ],
      },
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
