// Board logic

// <-- UI SECTION -->
// Reference point
const displayBoard = document.querySelector("#displayBoard");

// Create grid board
function createGrid(row, column) {
  for (let i = 0; i < row; i++) {
    // Create a new row for each iteration
    const newGridRow = document.createElement("div");
    newGridRow.classList.add("grid-row");
    displayBoard.appendChild(newGridRow);
    console.log("row");

    for (let j = 0; j < column; j++) {
      // Create a new column for each iteration
      const newGridColumn = document.createElement("div");
      newGridColumn.classList.add("grid-column");
      newGridRow.appendChild(newGridColumn);
      console.log("column");
    }
  }
}

createGrid(4, 4);
