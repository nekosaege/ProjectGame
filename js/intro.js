document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("introVideo");

    introVideo.addEventListener("ended", () => {
        
        setTimeout(() => {
            window.location.href = "../html/game.html"; 
        }, 1000); 
    });
});
