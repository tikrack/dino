const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const scoreElement = document.getElementById("score");
let score = 0;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    // تشخیص برخورد
    if (obstacleLeft < 90 && obstacleLeft > 50 && dinoTop >= 140) {
        // برخورد اتفاق افتاده
        alert(`Game Over! Your Score: ${score}`);
        score = 0; // ریست کردن امتیاز
        scoreElement.textContent = score;
    }

    // افزایش امتیاز وقتی مانع از صفحه خارج می‌شود
    if (obstacleLeft < 0) {
        score++;
        scoreElement.textContent = score;
    }
}, 10);