// Function called when button is clicked
function startFavorites() {
    
    const introScreen = document.getElementById('introScreen');
    const favContainer = document.getElementById('favContainer');
    const music = document.getElementById('favMusic');
    const backBtn = document.getElementById('backBtn');

    // 1. Play Music
    music.play().then(() => {
        console.log("Music Playing");
    }).catch(error => {
        console.log("Autoplay prevented, check settings");
    });

    // 2. Fade out Intro Button
    introScreen.style.opacity = '0';
    
    // 3. Switch screens after fade out (1 second)
    setTimeout(() => {
        introScreen.classList.add('hidden');
        favContainer.classList.remove('hidden');
        
        // Show back button a bit later
        setTimeout(() => {
            backBtn.classList.remove('hidden');
        }, 3000);
        
    }, 1000);
}