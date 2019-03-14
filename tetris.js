// Devapple @ 2019 @ 6:40

// Defining the version
var version = 1.1
console.log("Welcome to tetris.js! Please keep in mind, that this is a work in progress. Version: " + version);

 //Startup -- Draws a rectangle on the scren (play screen)
 const canvas = document.getElementById('tetris.js');
 const context = canvas.getContext('2d');
 context.scale(20,20);
 context.fillStyle = "#000";
 context.fillRect(0, 0, canvas.width, canvas.height);

//Create Pieces
const matrix = [
  [0,0,0],
  [1,1,1],
  [0,1,0],
]
function drawMatrix(matrix){
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if(value !== 0){
        context.fillStyle = 'white';
        context.fillRect(x, y, 1, 1);
      }
    });
  });
}

drawMatrix(matrix);
