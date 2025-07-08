
const phrases = ["Precision.", "Accountability.", "Excellence."];
let current = 0;
const tag = document.getElementById("rotating-tag");

setInterval(() => {
    current = (current + 1) % phrases.length;
    tag.textContent = phrases[current];
}, 2000);
