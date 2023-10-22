// <-- UI SECTION -->
// Main Reference point
const displayBoard = document.querySelector("#displayBoard");
const resetButton = document.querySelector("#resetButton");
const setPixelButton = document.querySelector("#setPixelBtn");

// Create grid board
function createGrid(row, column) {
  for (let i = 0; i < row; i++) {
    // Create a new row for each iteration
    const newGridRow = document.createElement("div");
    newGridRow.classList.add("grid-row");
    displayBoard.appendChild(newGridRow);

    for (let j = 0; j < column; j++) {
      // Create a new cell for each iteration
      const newGridColumn = document.createElement("div");
      newGridColumn.classList.add("grid-column");
      newGridRow.appendChild(newGridColumn);

      // Add a click event listener to each grid column
      newGridColumn.addEventListener("mouseover", (event) => {
        if (isDrawing) {
          event.target.style.backgroundColor = "black";
        }
      });
      newGridColumn.addEventListener("mousedown", () => {
        isDrawing = true;
      });
      newGridColumn.addEventListener("mouseup", () => {
        isDrawing = false;
      });
    }
  }
  // After creating the grid, select all grid columns
  gridColumnElements = document.querySelectorAll(".grid-column");
}

resetButton.addEventListener("click", () => {
  // Change the background color of all grid cells to white
  gridColumnElements.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

// <-- SET A PIXEL -->
let pixel = 16;
createGrid(pixel, pixel);

setPixelButton.addEventListener("click", () => {
  pixel = parseInt(prompt("Please enter pixel that you need : "));
  clearGrid();
  createGrid(pixel, pixel);
});

// Function to clear the grid
function clearGrid() {
  while (displayBoard.firstChild) {
    displayBoard.removeChild(displayBoard.firstChild);
  }
}
