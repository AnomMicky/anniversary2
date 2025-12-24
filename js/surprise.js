// --- CONFIGURATION ---
const TOTAL_FLOWERS = 100;
const FLOWER_TYPES = ['🌹', '🌻', '🌷', '🌸', '🌼', '🌺'];

function startPlay() {
    const stage = document.querySelector('.stage');
    const playBtn = document.querySelector('.play-btn');
    const garden = document.getElementById('garden');
    
    const mainText = document.getElementById('mainText');
    const cowText = document.getElementById('cowText');
    
    const cows = document.getElementById('cows');
    const mooBubble = document.querySelector('.moo-bubble'); // Get the bubble
    const backBtn = document.getElementById('backBtn');
    const mooSound = document.getElementById('mooSound');

    // 1. Open Curtains
    playBtn.classList.add('hidden');
    stage.classList.add('open');

    // 2. Grow Flowers & Show Main Text (after curtain opens - 1s delay)
    setTimeout(() => {
        for (let i = 0; i < TOTAL_FLOWERS; i++) {
            createFlower(garden, i);
        }
        mainText.classList.add('visible'); 
    }, 1000);

    // 3. Cows Arrive - 5s
    setTimeout(() => {
        // PLAY MOO SOUND!
        mooSound.play().catch(e => console.log("Audio error:", e));

        cows.classList.remove('hidden');
        // Show the MOO bubble over the cows
        mooBubble.classList.remove('hidden'); 

        setTimeout(() => { cows.classList.add('move-in'); }, 100);
        
        // Show funny text in sky
        cowText.classList.remove('hidden');
        cowText.classList.add('visible');
        
        // Remove flowers where cows walk
        eatFlowers(garden);

        // Show back button
        setTimeout(() => { backBtn.classList.remove('hidden'); }, 3000);

    }, 5000);
}

function createFlower(garden, index) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerText = FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)];
    
    // Position
    flower.style.left = Math.random() * 95 + '%';
    flower.style.bottom = Math.random() * 85 + '%';
    
    // Stagger animation
    flower.style.animationDelay = (index * 0.03) + 's'; 

    garden.appendChild(flower);
}

function eatFlowers(garden) {
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach((flower, i) => {
        // Only 20% chance to be eaten
        if(Math.random() > 0.8) {
            const delay = 100 + (Math.random() * 3500); 
            setTimeout(() => {
                flower.style.transition = "transform 0.5s, opacity 0.5s";
                flower.style.transform = "scale(0) rotate(180deg)"; 
                flower.style.opacity = "0";
            }, delay);
        }
    });
}