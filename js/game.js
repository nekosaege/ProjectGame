class SimpleGame {
    constructor() {
        this.player = document.getElementById("player");
        this.lifeDisplay = document.getElementById("lifeDisplay");
        this.scoreDisplay = document.getElementById("scoreDisplay");
        this.playerLife = 5;
        this.playerScore = 0;
        this.step = 10;
        this.speed = 2;

        this.goodObstacles = Array.from(document.querySelectorAll(".obstacle.good"));
        this.badObstacles = Array.from(document.querySelectorAll(".obstacle.bad"));

        this.init();
        this.createObstacles();
        setInterval(() => this.createObstacles(), 2000);
    }

    init() {
        this.updateHUD();
        this.setupEventListeners();
        this.startGameLoop();

        this.goodObstacles.forEach(obstacle => this.resetGoodObstacle(obstacle));
        this.badObstacles.forEach(obstacle => this.resetBadObstacle(obstacle));
    }

    updateHUD() {
        if (this.lifeDisplay) {
            this.lifeDisplay.textContent = `❤️ x ${this.playerLife}`;
        }
        if (this.scoreDisplay) {
            this.scoreDisplay.textContent = `🪙 x ${this.playerScore}`;
        }
    }

    createObstacles() {
        const boardElm = document.getElementById("board");
        const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        board.appendChild(obstacle);

        obstacle.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    obstacle.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
}

setupEventListeners() {
        document.addEventListener("keydown", (event) => this.handleMovement(event));
    }

    handleMovement(event) {
        const left = parseInt(window.getComputedStyle(this.player).left) || 0;
        const top = parseInt(window.getComputedStyle(this.player).top) || 0;

        switch (event.key) {
            case "ArrowLeft":
                this.player.style.left = `${Math.max(0, left - this.step)}px`;
                break;
            case "ArrowRight":
                this.player.style.left = `${Math.min(window.innerWidth - this.player.offsetWidth, left + this.step)}px`;
                break;
            case "ArrowDown":
                this.player.style.top = `${Math.min(window.innerHeight - this.player.offsetHeight, top + this.step)}px`;
                break;
        }
    }

    movePlayerUp() {
        const top = parseInt(window.getComputedStyle(this.player).top) || 0;
        this.player.style.top = `${Math.max(0, top - this.speed)}px`;
    }

    /*resetGoodObstacle(obstacle) {
        obstacle.style.top = `-${Math.random() * 300}px`; 
        obstacle.style.left = `${Math.random() * (window.innerWidth - obstacle.offsetWidth)}px`;

        this.animateGoodObstacle(obstacle);
    }

    resetBadObstacle(obstacle) {
        obstacle.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
        obstacle.style.left = `${Math.random() * (window.innerWidth - obstacle.offsetWidth)}px`;

        this.animateBadObstacle(obstacle);
    }

    animateGoodObstacle(obstacle) {
        const loop = setInterval(() => {
            if (!document.body.contains(obstacle)) {
                clearInterval(loop);
                return;
            }

            let top = parseInt(window.getComputedStyle(obstacle).top) || 0;
            top += 2;

            if (top > window.innerHeight) {
                this.resetGoodObstacle(obstacle);
                return;
            }

            obstacle.style.top = `${top}px`;

            this.checkCollision(obstacle, true, loop);
        }, 30);
    }

    animateBadObstacle(obstacle) {
        let direction = Math.random() < 0.5 ? -1 : 1;

        const loop = setInterval(() => {
            if (!document.body.contains(obstacle)) {
                clearInterval(loop);
                return;
            }

            let left = parseInt(window.getComputedStyle(obstacle).left) || 0;
            left += direction * 2;

            // Inverte direção nas bordas
            if (left <= 0 || left + obstacle.offsetWidth >= window.innerWidth) {
                direction *= -1;
            }

            obstacle.style.left = `${left}px`;

            this.checkCollision(obstacle, false, loop);
        }, 60);
    }

    checkCollision(obstacle, isGood, interval) {
        const playerRect = this.player.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        const collision =
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top &&
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left;

        if (collision) {
            obstacle.remove();
            clearInterval(interval);

            if (isGood) {
                this.playerScore++;
                this.spawnNewObstacle(true);
            } else {
                this.playerLife--;
                this.spawnNewObstacle(false);
            }

            this.updateHUD();
        }
    }

    spawnNewObstacle(isGood) {
        const newObstacle = document.createElement("div");
        newObstacle.classList.add("obstacle");
        newObstacle.classList.add(isGood ? "good" : "bad");
        document.body.appendChild(newObstacle);

        if (isGood) {
            this.resetGoodObstacle(newObstacle);
        } else {
            this.resetBadObstacle(newObstacle);
        }
    }*/

    startGameLoop() {
        setInterval(() => {
            this.movePlayerUp();

            if (this.playerLife <= 0) {
                alert("Game Over");
                window.location.href = "../gameover.html";
            }

            if (this.playerScore >= 10) {
                alert("You win!");
                window.location.href = "../win.html";
            }
        }, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new SimpleGame();
});
