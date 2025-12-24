const dialogueBox = document.getElementById('dialogue');
const armLeft = document.getElementById('armLeft');
const armRight = document.getElementById('armRight');
const startBtn = document.querySelector('.start-btn');
const backBtn = document.getElementById('backBtn');
const music = document.getElementById('bgMusic'); // Grab the audio element

// --- CONFIGURATION ---
const DURATION_SECONDS = 25; // Total animation run time

// Dialogues: [Text, Time to show (seconds)]
const timeline = [
    { text: "Hey love... I was just thinking about us.", time: 0 },
    { text: "2 years ago, I didn't truly know what love was.", time: 4 },
    { text: "But every single day since then...", time: 8 },
    { text: "My feelings just kept growing, bigger and bigger.", time: 13 },
    { text: "Wait... look at my arms!", time: 18 },
    { text: "This is how much I love you!", time: 22 },
    { text: "Actually... it's way more than this screen can hold! ❤️", time: 25 }
];

let animationInterval;
let startTime;

function startShow() {
    // 1. Hide start button
    startBtn.classList.add('hidden');

    // 2. Play Music (User has clicked, so it is allowed)
    music.play().catch(e => console.log("Audio play failed:", e));

    startTime = Date.now();
    
    // 3. Start the loop
    animationInterval = requestAnimationFrame(animate);
    
    // 4. Start background hearts
    setInterval(createHeart, 500);
}

function animate() {
    const now = Date.now();
    const elapsed = (now - startTime) / 1000; // in seconds

    // 1. Update Text based on timeline
    let currentMessage = timeline[0].text;
    for (let i = 0; i < timeline.length; i++) {
        if (elapsed >= timeline[i].time) {
            currentMessage = timeline[i].text;
        }
    }
    
    // Smooth text update
    if (dialogueBox.innerText !== currentMessage) {
        dialogueBox.style.opacity = 0;
        setTimeout(() => {
            dialogueBox.innerText = currentMessage;
            dialogueBox.style.opacity = 1;
        }, 300);
    }

    // 2. Grow Arms
    // We want arms to grow from time 13s to 25s
    const growStartTime = 13;
    const growDuration = 12; // 25 - 13
    
    if (elapsed > growStartTime) {
        const growProgress = Math.min((elapsed - growStartTime) / growDuration, 1);
        
        // Target is off screen (60vw ensures it goes past the edge)
        const maxGrowth = 60 * window.innerWidth / 100; 
        const armWidth = 30 + (growProgress * maxGrowth); 

        armLeft.style.width = `${armWidth}px`;
        armRight.style.width = `${armWidth}px`;
    }

    // Continue loop until end + buffer
    if (elapsed < DURATION_SECONDS + 2) { 
        requestAnimationFrame(animate);
    } else {
        // Show Back Button at the end
        backBtn.classList.remove('hidden');
    }
}

// --- BACKGROUND HEARTS EFFECT ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random size variation
    const size = Math.random() * 2 + 1; // 1rem to 3rem
    heart.style.fontSize = size + 'rem';
    
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}