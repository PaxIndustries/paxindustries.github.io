
const phrases = [
    "Bringing Peace to the Production Line.",
    "Precision You Can Trust. Quality You Can See.",
    "Excellence, Every Part. Every Time.",
    "Peace. Precision. Power.",
    "Quality That Moves You Forward."
];
let current = 0;
const tag = document.getElementById("rotating-tag");

setInterval(() => {
    current = (current + 1) % phrases.length;
    tag.textContent = phrases[current];
}, 4000);
