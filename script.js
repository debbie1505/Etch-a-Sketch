document.addEventListener("DOMContentLoaded", function () {
  function createGrid(sides) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = ""; // Clear the existing grid

    for (let i = 0; i < sides; i++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("grid-row");

      for (let j = 0; j < sides; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        gridRow.appendChild(gridItem);

        //Adjust width and height when sides > 32

        const newWidth = 500 / sides; // Calculate new width
        const newHeight = 400 / (sides * 1.1); // Calculate new height
        gridItem.style.width = `${newWidth}px`;
        gridItem.style.height = `${newHeight}px`;

        // Add event listener for hover effect
        gridItem.addEventListener("mouseenter", function () {
          gridItem.classList.add("grid-items-hover");
        });
      }

      gridContainer.appendChild(gridRow);
    }
  }

  // Initial grid creation
  createGrid(16);

  const btn = document.querySelector(".myButton");
  btn.addEventListener("click", function () {
    let userInput = prompt(
      "How many squares by side for the new grid (max: 100): "
    );
    userInput = parseInt(userInput, 10);

    let sides = 0;

    // Validate user input
    if (!isNaN(userInput) && userInput > 0 && userInput <= 100) {
      sides = userInput;
      createGrid(sides);
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  });
});
