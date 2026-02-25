// Map each key to a sound file
const sounds = {
    q: new Audio("sounds/boom.wav"),
    w: new Audio("sounds/clap.wav"),
    e: new Audio("sounds/hihat.wav"),
    a: new Audio("sounds/kick.wav"),
    s: new Audio("sounds/openhat.wav"),
    d: new Audio("sounds/ride.wav"),
    z: new Audio("sounds/snare.wav"),
    x: new Audio("sounds/tink.wav"),
    c: new Audio("sounds/tom.wav")
};

// Function to play sound
function playSound(key) {
    if (sounds[key]) {
        sounds[key].currentTime = 0; // restart if already playing
        sounds[key].play();
    } else {
        console.log("Key not mapped:", key);
    }
}

// Function to animate button
function animateButton(key) {
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if (button) {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 150);
    }
}

// Click events
document.querySelectorAll(".drum").forEach(button => {
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