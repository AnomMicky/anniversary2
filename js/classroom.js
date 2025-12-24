document.addEventListener('DOMContentLoaded', function() {
    
    const theBoy = document.getElementById('theBoy');
    const narrativeText = document.getElementById('narrative');

    function updateText(text) {
        narrativeText.classList.remove('hidden');
        narrativeText.innerText = text;
    }

    // --- TIMELINE SEQUENCE ---

    // Start: Scene set (0s - 3s)
    updateText("The class was empty... no lectures, just free time. I was napping on the last bench.");

    // STEP 1: Wake up (at 4 seconds)
    setTimeout(() => {
        // Remove the 'sleeping' class
        theBoy.classList.remove('sleeping');
        
        // Hide the Zzz
        const zzz = theBoy.querySelector('.zzz');
        if(zzz) zzz.style.display = 'none';

        updateText("I woke up to the sound of laughter coming from the front...");
    }, 4000);

    // STEP 2: The realization / Falling in love (at 7 seconds)
    setTimeout(() => {
        // Add the 'in-love' class
        theBoy.classList.add('in-love');
        updateText("And there you were, sitting in the second row, shining brighter than anyone else. I fell for you right there.");
    }, 7000);

});