const videoIntro = document.getElementById('videoIntro');
const videoGame = document.getElementById('videoGame');
const videoLevel2 = document.getElementById('videoLevel2');
const videoGameOver = document.getElementById('videoGameOver');
const videoVictory = document.getElementById('videoVictory');
const startGameButton = document.getElementById('startGame');
const gameStatus = document.getElementById('gameStatus');

let currentLevel = 1; // Track the current level

// Ensure the event listener is added after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    startGameButton.addEventListener('click', startGame);
  });  

// Função para iniciar o jogo
function startGame() {
    console.log("Start Game clicked!");
  
    startGameButton.style.display = 'none'; // Hide the start button
    videoIntro.style.display = 'none';      // Hide the intro video
    videoGame.style.display = 'block';      // Show the game video
    gameStatus.textContent = '';
  
    setTimeout(() => {
      nextLevel();
    }, 5000);
  }
  

// Função para ir para o próximo nível
function nextLevel() {
  if (currentLevel === 1) {
    // Simula a transição para o nível 2
    videoGame.style.display = 'none';
    videoLevel2.style.display = 'block';
    gameStatus.textContent = '';
    currentLevel = 2;

    // Simula vitória após 5 segundos
    setTimeout(() => {
      winGame();
    }, 5000);
  }
}

// Função para game over
function gameOver() {
  videoGame.style.display = 'none';
  videoGameOver.style.display = 'block';
  gameStatus.textContent = '';
}

// Função para vitória
function winGame() {
  videoLevel2.style.display = 'none'; // Stop the level video
  videoVictory.style.display = 'block';
  gameStatus.textContent = '';
}
