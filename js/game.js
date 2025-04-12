document.addEventListener("DOMContentLoaded", () => {
    // Lógica do botão de vitória
    const finalizarBtn = document.getElementById("videoGame");

    if (finalizarBtn) {
        finalizarBtn.addEventListener("click", () => {
            // Aqui você pode colocar qualquer lógica de verificação antes da vitória
            window.location.href = "../html/victory.html";
        });
    }

    // Lógica do jogo
    const player = document.getElementById("player");
    const obstacle1 = document.getElementById("obstacle1"); // Obstáculo que perde vida
    const obstacle2 = document.getElementById("obstacle2"); // Obstáculo que ganha vida
    let playerLife = 3; // Número inicial de vidas
    const lifeDisplay = document.getElementById("lifeDisplay"); // Mostra a quantidade de vidas no HTML

    // Atualiza a quantidade de vidas no display
    function updateLife() {
        lifeDisplay.textContent = `Life: ${playerLife}`;
    }

    // Função para detectar colisões
    function detectCollision() {
        const playerRect = player.getBoundingClientRect();
        const obstacle1Rect = obstacle1.getBoundingClientRect();
        const obstacle2Rect = obstacle2.getBoundingClientRect();

        // Verifica colisão com o obstáculo que perde vida
        if (
            playerRect.top < obstacle1Rect.bottom &&
            playerRect.bottom > obstacle1Rect.top &&
            playerRect.left < obstacle1Rect.right &&
            playerRect.right > obstacle1Rect.left
        ) {
            playerLife -= 1; // Perde vida
            updateLife();
        }

        // Verifica colisão com o obstáculo que ganha vida
        if (
            playerRect.top < obstacle2Rect.bottom &&
            playerRect.bottom > obstacle2Rect.top &&
            playerRect.left < obstacle2Rect.right &&
            playerRect.right > obstacle2Rect.left
        ) {
            playerLife += 1; // Ganha vida
            updateLife();
        }
    }

    // Função de movimentação do player
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

        // Verifica colisão após cada movimento
        detectCollision();
    });

    // Exemplo de fim de jogo se as vidas chegarem a 0
    setInterval(() => {
        if (playerLife <= 0) {
            alert("Game Over");
            window.location.href = "../html/gameover.html"; // Redireciona para a tela de Game Over
        }
    }, 100);
});
