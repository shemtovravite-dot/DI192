const grid = document.getElementById("grid");
const colors = document.querySelectorAll(".color");

let selectedColor = "#000000";
let isDrawing = false;

/* =========================
   CREATE GRID (20x20)
========================= */

for (let i = 0; i < 400; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

/* =========================
   COLOR SELECTION
========================= */

colors.forEach(color => {
  color.addEventListener("click", () => {

    // remove active from all
    colors.forEach(c => c.classList.remove("active"));

    // add active to selected
    color.classList.add("active");

    selectedColor = color.dataset.color;
  });
});

/* =========================
   DRAWING LOGIC
========================= */

grid.addEventListener("mousedown", () => {
  isDrawing = true;
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

grid.addEventListener("mouseover", (e) => {
  if (isDrawing && e.target.classList.contains("square")) {
    e.target.style.backgroundColor = selectedColor;
  }
});