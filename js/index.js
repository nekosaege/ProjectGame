document.addEventListener("DOMContentLoaded", () => {
  console.log('index.js loaded');

  const startButton = document.getElementById("startGame");

  if (startButton) {
    console.log('Start button found'); 

    startButton.addEventListener("click", () => {
      console.log('Start button clicked'); 
      window.location.href = "../html/intro.html"; 
    });
  } else {
    console.error("Start button not found!"); 
  }
});
