document.addEventListener("DOMContentLoaded", () => {
    const finalizarBtn = document.getElementById("videoGame");

    if (finalizarBtn) {
        finalizarBtn.addEventListener("click", () => {
            window.location.href = "../html/victory.html";
        });
    }

   
    const player = document.getElementById("player");
    const obstacle1 = document.getElementById("obstacle1"); 
    const obstacle2 = document.getElementById("obstacle2"); 
    let playerLife = 3; 
    const lifeDisplay = document.getElementById("lifeDisplay"); 

    function updateLife() {
        lifeDisplay.textContent = `Life: ${playerLife}`;
    }

    function detectCollision() {
        const playerRect = player.getBoundingClientRect();
        const obstacle1Rect = obstacle1.getBoundingClientRect();
        const obstacle2Rect = obstacle2.getBoundingClientRect();

        if (
            playerRect.top < obstacle1Rect.bottom &&
            playerRect.bottom > obstacle1Rect.top &&
            playerRect.left < obstacle1Rect.right &&
            playerRect.right > obstacle1Rect.left
        ) {
            playerLife -= 1; 
            updateLife();
        }

        if (
            playerRect.top < obstacle2Rect.bottom &&
            playerRect.bottom > obstacle2Rect.top &&
            playerRect.left < obstacle2Rect.right &&
            playerRect.right > obstacle2Rect.left
        ) {
            playerLife += 1; 
            updateLife();
        }
    }

    document.addEventListener("keydown", (event) => {
        const step = 10;
        let top = parseInt(window.getComputedStyle(player).top) || 0;
        let left = parseInt(window.getComputedStyle(player).left) || 0;

        switch (event.key) {
            case "ArrowUp":
                player.style.top = `${top - step}px`;
                break;
            case "ArrowDown":
                player.style.top = `${top + step}px`;
                break;
            case "ArrowLeft":
                player.style.left = `${left - step}px`;
                break;
            case "ArrowRight":
                player.style.left = `${left + step}px`;
                break;
        }

        detectCollision();
    });

    setInterval(() => {
        if (playerLife <= 0) {
            alert("Game Over");
            window.location.href = "../html/gameover.html"; 
        }
    }, 100);
});
