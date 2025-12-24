// --- 0. RANDOM PHOTO GENERATOR ---
const totalPhotosAvailable = 38; 
// Removed 'photosToDisplay' limit so we show ALL photos

function generateRandomPhotos() {
    const container = document.getElementById("slideshow-container");
    
    // 1. Create an array of numbers from 1 to 38
    let photoNumbers = [];
    for (let i = 1; i <= totalPhotosAvailable; i++) {
        photoNumbers.push(i);
    }

    // 2. Shuffle the array (Fisher-Yates Shuffle)
    // This ensures a random order without duplicates
    for (let i = photoNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photoNumbers[i], photoNumbers[j]] = [photoNumbers[j], photoNumbers[i]];
    }

    // 3. Create slides for ALL photos in the random order
    photoNumbers.forEach(num => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "mySlides fade";
        
        const img = document.createElement("img");
        img.src = `photos/img-${num}.jpg`; 
        
        slideDiv.appendChild(img);
        container.appendChild(slideDiv);
    });
}
generateRandomPhotos();


// --- 1. GIFT BOX & ANIMATION LOGIC ---
const giftContainer = document.getElementById("gift-container");
const introScreen = document.getElementById("intro-screen");
const slideshowScreen = document.getElementById("slideshow-screen");
const instructions = document.querySelector(".instruction-container");
const audio = document.getElementById("bg-music");

giftContainer.addEventListener("click", function() {
    // 1. Play Music Immediately
    if (audio) {
        audio.volume = 0.6; 
        audio.currentTime = 39; 
        audio.play().catch(e => console.log("Audio error:", e));
    }

    // 2. Animate Box Opening
    giftContainer.classList.add("box-open");
    
    // Hide the text immediately
    if(instructions) instructions.style.opacity = "0";

    // 3. Trigger Celebration
    createConfettiExplosion();

    // 4. Wait 7 seconds, then transition
    setTimeout(function() {
        // A) TRIGGER HEART FORMATION 
        const scatteredConfetti = document.querySelectorAll('.confetti');
        scatteredConfetti.forEach(c => {
            c.classList.add('forming-heart');
        });

        // B) Fade out intro / Show Slideshow
        introScreen.style.opacity = "0";
        slideshowScreen.classList.remove("hidden");
        slideshowScreen.style.display = "block";
        startSlideshow();

        setTimeout(() => {
            introScreen.style.display = "none";
        }, 2000);

    }, 7000); 
});


// --- 2. CONFETTI ENGINE ---
function createConfettiExplosion() {
    const colors = ['#ff6b6b', '#ffd700', '#ffffff', '#ff3366', '#a0e9ff'];
    const container = document.getElementById('confetti-container');
    const particleCount = 200; 

    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const w = Math.random() * 15 + 5;
        const h = Math.random() * 15 + 5;
        confetti.style.width = w + 'px';
        confetti.style.height = h + 'px';
        
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const tx = (Math.random() - 0.5) * 200; 
        const ty = (Math.random() - 0.5) * 200; 
        
        confetti.style.setProperty('--tx', tx + 'vw');
        confetti.style.setProperty('--ty', ty + 'vh');

        // Heart Formation Data
        const angle = (i / particleCount) * Math.PI * 2; 
        const heartScale = 15; 

        let hx = 16 * Math.pow(Math.sin(angle), 3);
        let hy = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        confetti.style.setProperty('--hx', (hx * heartScale) + 'px');
        confetti.style.setProperty('--hy', (hy * heartScale) + 'px');

        const duration = Math.random() * 3 + 4; 
        confetti.style.animation = `burst-fall ${duration}s ease-out forwards`;
        
        container.appendChild(confetti);
    }
}


// --- 3. SLIDESHOW LOGIC ---
let slideIndex = 0;
function startSlideshow() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (slides.length === 0) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(startSlideshow, 3500); 
}