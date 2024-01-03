document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let j = 0; j < 16; j++) {
      const gridItems = document.createElement("div");
      gridItems.classList.add("grid");
      gridRow.appendChild(gridItems);
    }

    gridContainer.appendChild(gridRow);
  }
});
