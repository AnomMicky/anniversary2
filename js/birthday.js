document.addEventListener('DOMContentLoaded', function() {
    
    // --- CONFIGURATION ---
    const totalImages = 27; 
    const compliments = [
        "You made me the person I'm right now by teaching me everything and making sure that I do everything properly 🥹🥹",
        "You are the most gorgeous and the most amazing person in this whole world 😍😍",
        "I love each and every moment we have together and we will have many many more in our whole life as we will be together forever 🤭🤭",
        "I love you so so much my gorgeous princess 😘😘",
        "and remember this always that no matter what, you are amazing and you got it all my baby boo. You can do anything and everything in this world 💛💛",
        "Happy 2nd Anniversary my baby boo 😍"
    ];

    // --- ELEMENTS ---
    const imgElement = document.getElementById('slideshowImg');
    const textElement = document.getElementById('complimentText');
    const textBox = document.querySelector('.compliment-box');
    const backBtn = document.getElementById('backBtn');
    
    const startOverlay = document.getElementById('startOverlay');
    const startBtn = document.getElementById('startBtn');

    // Music Controls
    const music = document.getElementById('bgMusic');
    const musicBtn = document.querySelector('.music-control');
    let isPlaying = false;

    // --- START SEQUENCE ---
    startBtn.addEventListener('click', () => {
        // 1. Play Music
        music.play().then(() => {
            isPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
        }).catch(e => console.log("Audio issue:", e));

        // 2. Hide Overlay
        startOverlay.style.opacity = 0;
        setTimeout(() => {
            startOverlay.style.display = 'none';
        }, 1000);

        // 3. Start Slideshows
        startSlideshows();
    });


    function startSlideshows() {
        let currentImgIndex = 4;
        let currentTextIndex = 0;

        // IMAGE SLIDESHOW (Every 3 Seconds)
        setInterval(() => {
            imgElement.classList.add('fade-out');
            setTimeout(() => {
                currentImgIndex++;
                if (currentImgIndex > totalImages) currentImgIndex = 1;
                // Note: Ensure your images are in the 'photos' folder as per your HTML
                imgElement.src = `../photos/photo-${currentImgIndex}.jpeg`;
                imgElement.onload = () => {
                    imgElement.classList.remove('fade-out');
                    imgElement.classList.toggle('zoom-in'); 
                };
            }, 1000); 
        }, 3000); 

        // COMPLIMENT SLIDESHOW (Every 7 Seconds)
        setInterval(() => {
            textBox.style.opacity = 0;
            textBox.style.transform = 'translateY(10px)';
            setTimeout(() => {
                currentTextIndex++;
                if (currentTextIndex >= compliments.length) currentTextIndex = 0;
                textElement.innerText = compliments[currentTextIndex];
                textBox.style.opacity = 1;
                textBox.style.transform = 'translateY(0)';
            }, 1000);
        }, 7000);

        // SHOW BACK BUTTON (After 5 seconds)
        setTimeout(() => {
            backBtn.classList.remove('hidden');
        }, 5000);
    }


    // --- MANUAL MUSIC TOGGLE ---
    window.toggleMusic = function() {
        if (isPlaying) {
            music.pause();
            musicBtn.innerText = "🎵 Play Music";
        } else {
            music.play();
            musicBtn.innerText = "⏸ Pause Music";
        }
        isPlaying = !isPlaying;
    };

});