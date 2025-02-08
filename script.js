const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function() {
    // موقعیت فعلی دایناسور
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // موقعیت فعلی مانع
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // تشخیص برخورد
    if (obstacleLeft < 90 && obstacleLeft > 50 && dinoTop >= 140) {
        // برخورد اتفاق افتاده
        alert("Game Over!");
    }
}, 10);