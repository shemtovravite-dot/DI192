// רשימת צבעים
const colors = [
    "red", "blue", "green", "yellow", "purple", "orange",
    "pink", "brown", "black", "white", "gray", "cyan",
    "magenta", "lime", "navy", "gold"
];

let currentColor = "black";
let isDrawing = false;

// יצירת פלטת צבעים
const palette = document.getElementById("color-palette");

colors.forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;

    colorDiv.addEventListener("click", () => {
        currentColor = color;
    });

    palette.appendChild(colorDiv);
});

// יצירת לוח ציור
const grid = document.getElementById("grid");

for (let i = 0; i < 400; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // התחלת ציור
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        cell.style.backgroundColor = currentColor;
    });

    // ציור תוך כדי גרירה
    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = currentColor;
        }
    });

    grid.appendChild(cell);
}

// עצירת ציור
document.addEventListener("mouseup", () => {
    isDrawing = false;
});