// Select all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Function to play sound based on key
function playSound(key) {
    switch(key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Key not mapped:", key);
    }
}

// Function to animate button
function animateButton(key) {
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if(button) {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100);
    }
}

// Mouse click events
drumButtons.forEach(button => {
    button.addEventListener("click", function() {
        const key = this.dataset.key;
        playSound(key);
        animateButton(key);
    });
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    playSound(key);
    animateButton(key);
});