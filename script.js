const dino = document.getElementById("dino");

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
        }, 500);
    }
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 90 && obstacleLeft > 50 && dinoTop >= 140) {
        alert("Game Over!");
    }
}, 10);