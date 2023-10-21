// <-- UI SECTION -->
// Reference point
const displayBoard = document.querySelector("#displayBoard");
const resetButton = document.querySelector("#resetButton");

// Create grid board
function createGrid(row, column) {
  for (let i = 0; i < row; i++) {
    // Create a new row for each iteration
    const newGridRow = document.createElement("div");
    newGridRow.classList.add("grid-row");
    displayBoard.appendChild(newGridRow);

    for (let j = 0; j < column; j++) {
      // Create a new column for each iteration
      const newGridColumn = document.createElement("div");
      newGridColumn.classList.add("grid-column");
      newGridRow.appendChild(newGridColumn);

      // Add a click event listener to each grid column
      newGridColumn.addEventListener("click", () => {
        newGridColumn.style.backgroundColor = "black";
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

createGrid(4, 4);
