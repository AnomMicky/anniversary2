document.addEventListener('DOMContentLoaded', function() {

    const scene1 = document.getElementById('scene1');
    const scene2 = document.getElementById('scene2');
    const scene3 = document.getElementById('scene3');
    
    const cowHerd = document.getElementById('cowHerd');
    const coupleWalking = document.getElementById('coupleWalking');
    const drinks = document.getElementById('drinks');
    const narrativeText = document.getElementById('narrativeText');

    // --- TIMELINE SEQUENCE ---

    // Start (0s): Scene 1 is visible by default.
    narrativeText.innerText = "We started our journey from college to the lake...";

    // STEP 1: Cows appear (at 3 seconds)
    setTimeout(() => {
        cowHerd.classList.remove('hidden');
        setTimeout(() => { cowHerd.classList.add('move-in'); }, 100);
        narrativeText.innerText = "At the lake, so many cows suddenly started coming near us! 🐄";
    }, 3000);

    // STEP 2: Transition to Scene 2 - Adventure (at 7 seconds)
    setTimeout(() => {
        scene1.classList.add('hidden'); // Fade out lake
        scene2.classList.remove('hidden'); // Fade in adventure path
        narrativeText.innerText = "We decided to adventure... but the path was full of pit holes!";
        
        // TRIGGER ANIMATION NOW:
        // This ensures they start walking only when the scene is visible!
        coupleWalking.classList.add('start-walking');

    }, 7000);

    // STEP 3: Transition to Scene 3 - Chargers (at 13 seconds)
    setTimeout(() => {
        scene2.classList.add('hidden'); // Fade out path
        scene3.classList.remove('hidden'); // Fade in cafe
        narrativeText.innerText = "Finally, we reached 'Chargers' to cool down.";
    }, 13000);

    // STEP 4: Drinks appear (at 15 seconds)
    setTimeout(() => {
        drinks.classList.remove('hidden');
        setTimeout(() => { drinks.classList.add('show'); }, 100); 
        narrativeText.innerText = "A Mint Mojito for her, a Strawberry for me. The perfect end to the adventure. 🍹";
    }, 15000);

});