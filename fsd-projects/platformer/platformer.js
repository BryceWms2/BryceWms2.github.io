$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150, 200, 10 ,400);
createPlatform(450, 150, 10, 700 );
createPlatform(400,601, 50, 10);
createPlatform(160, 470, 50, 10);
createPlatform(390, 350, 70, 10);
createPlatform(150, 210, 80, 10);
createPlatform(100, 200, 100, 10);
createPlatform(450, 150, 100, 10);
createPlatform(450, 400, 150, 10),
createPlatform(870, 400, 200, 10);
createPlatform(1200, 500, 150, 10);
createPlatform(1090, 620, 130, 10);
    // TODO 3 - Create Collectables
createCollectable("database", 140, 150, 0.5, 0.7);
createCollectable("database", 500, 350, 0.5, 0.7);
createCollectable("database", 1000, 350, 0.5, 0.7);
    createCollectable("database", 500, 680, 0.5, 0.7);
    // TODO 4 - Create Cannons
createCannon("top", 370, 1100);
createCannon("bottom", 570, 800);
createCannon("bottom", 800, 800); 
    createCannon("right", 410, 1800); 
    createCannon("top", 1200, 1800)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
