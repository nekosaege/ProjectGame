class SimpleGame {
    constructor() {
        this.player = document.getElementById("player");
        this.finalizarBtn = document.getElementById("videoGame");
        this.lifeDisplay = document.getElementById("lifeDisplay");
        this.playerLife = 3;
        this.step = 10;

        this.obstacles = Array.from(document.querySelectorAll(".obstacle"));

        this.init();
    }

    init() {
        this.updateLife();
        this.setupEventListeners();
        this.startGameLoop();

        this.obstacles.forEach(obstacle => this.startObstacleMovement(obstacle));
    }

    updateLife() {
        if (this.lifeDisplay) {
            this.lifeDisplay.textContent = `Life: ${this.playerLife}`;
        }
    }

    setupEventListeners() {
        if (this.finalizarBtn) {
            this.finalizarBtn.addEventListener("click", () => {
                window.location.href = "../html/victory.html";
            });
        }

        document.addEventListener("keydown", (event) => this.handleMovement(event));
    }

    handleMovement(event) {
        let top = parseInt(window.getComputedStyle(this.player).top) || 0;
        let left = parseInt(window.getComputedStyle(this.player).left) || 0;

        switch (event.key) {
            case "ArrowUp":
                this.player.style.top = `${top - this.step}px`;
                break;
            case "ArrowDown":
                this.player.style.top = `${top + this.step}px`;
                break;
            case "ArrowLeft":
                this.player.style.left = `${left - this.step}px`;
                break;
            case "ArrowRight":
                this.player.style.left = `${left + this.step}px`;
                break;
        }

        this.detectCollision();
    }

    moveDown(obstacle) {
        const maxTop = window.innerHeight - obstacle.offsetHeight;
        let currentTop = parseInt(window.getComputedStyle(obstacle).top) || 0;
        const speed = Math.floor(Math.random() * 3) + 16;

        currentTop += speed;

        if (currentTop >= maxTop) {
            currentTop = 0;
            const randomLeft = Math.floor(Math.random() * (window.innerWidth - obstacle.offsetWidth));
            obstacle.style.left = `${randomLeft}px`;
        }

        obstacle.style.top = `${currentTop}px`;
    }

    startObstacleMovement(obstacle) {
        setInterval(() => {
            this.moveDown(obstacle);
            this.detectCollision(); 
        }, 30); 
    }

    detectCollision() {
        const playerRect = this.player.getBoundingClientRect();
    
        this.obstacles.forEach(obstacle => {
            const obstacleRect = obstacle.getBoundingClientRect();
    
            if (
                playerRect.top < obstacleRect.bottom &&
                playerRect.bottom > obstacleRect.top &&
                playerRect.left < obstacleRect.right &&
                playerRect.right > obstacleRect.left
            ) {
                if (obstacle.classList.contains("bad")) {
                    this.playerLife--;
                    obstacle.style.top = `0px`;
                } else {
                    this.playerLife++;
                    obstacle.remove();
                    this.obstacles = this.obstacles.filter(o => o !== obstacle);
                }
    
                this.updateLife();
            }
        });
    }
    

    startGameLoop() {
        setInterval(() => {
            if (this.playerLife <= 0) {
                alert("Game Over");
                window.location.href = "../html/gameover.html";
            }
        }, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new SimpleGame();
});
