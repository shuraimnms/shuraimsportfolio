const text = "Shuraim | Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
