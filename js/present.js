// --- THE MESSAGE DATA ---
const messages = [
    "I don't know what is there in the future for us...",
    "But all I know is that...",
    "We will stay together forever. ❤️",
    "It is always so wonderful to be around you and get to know you more 🤭",
    "You always amaze me whenever you are doing something 😍",
    "Like recently when u started coding and you were scared to even start...",
    "But look at you now, you love coding! gehehehehhe",
    "You have not played that many games but whenever you start them...",
    "It always feels like a pro is in making 😘😯",
    "The shooting game? You had scores that I got after years of playing! 😎",
    "Gehehehehehe I just adore you a lot... like a lot!",
    "I just wish that you get everything you want my love 💛",
    "You got this my baby boo 😘",
    "In these two years, we have been through alot...",
    "But no matter what the situation is, we have always got each other 🤭",
    "I have done a lot of dumb stuff in these years and you have always forgave me 🥹",
    "Ik ik im dumb des and I do alot of dumb stuff...",
    "But thank you so so much for bearing with me 🥺",
    "I didnt even know what love was...",
    "You showed me everything by being so gentle and kind with me 🥹",
    "You loving me was the best thing which has happened to me 🥹",
    "Ik that I have hurt you by doing stuff and I'm improving...",
    "I promise to not repeat any of the mistakes I have done in the past 🥺",
    "Thank you for being so patient, understanding and kind 🥺",
    "This relationship taught me so so many things.",
    "How I should take care of myself properly...",
    "How I should be more expressive than just supressing everything 🥺",
    "Im still not that great at it but I'm trying...",
    "And with you, I want to share everything no matter what 🥺",
    "I understood that sharing stuff is what makes us stronger 🥹💛",
    "I'll always share stuff with you even if that means I'll get scolded 😝😘",
    "I'm still learning how to be more empathic...",
    "I'm learning from the person who is the best at it 🤭",
    "You told me that I'm kind, but I learned kindness from you.",
    "You are such a kuchu puchu 🤭",
    "You care alot for one and another 😍😍",
    "Since the day you got on my scooty...",
    "I learned to drive so you don't feel the bumps and ",
    "be more careful to ensure that I dont hurt you at all",
    "That's why I keep asking you if you are getting scared of my driving 🥺💛",
    "you are so so precious to me 🥹",
    "To protect you I'll do anything and everythting",
    "I have learned so much from you, for you and because of you.",
    "Like teasing you (my dragon age baby) and rage baiting you! hehehe 😝",
    "Thanks to you, now I know so many food restaurants 🤭",
    "Because of you, I'm not in the black pit I was in 🥺",
    "Because of you, I know how to take a stand for myself 🥹💛",
    "There are many more things I have learned fron you 🥹🥹💛💛",
    "There are many more things I will learn from you 🤭💛",
    "Because you are so so amazing and I have to catch up to you des 😘😘💛💛",
    "Thank you for loving me through all the lows and highs.",
    "I mean each and everything from the bottom of my heart 🥺",
    "Happy 2nd Anniversary my baby boo 🥹🥹💛💛",
    "Thank you so much for choosing me 🥹",
    "I'm doing my best to become the man you have dreamed off 🥺🥹💛",
    "- With love, Your Ruru ❤️"
];

function revealFuture() {
    const startScreen = document.getElementById('startScreen');
    const futureMessage = document.getElementById('futureMessage');
    const music = document.getElementById('futureMusic');
    const scrollContainer = document.getElementById('scrollContainer');
    const backBtn = document.getElementById('backBtn');

    // 1. Play Music
    music.volume = 0.6;
    music.play().catch(e => console.log("Audio error:", e));

    // 2. Hide Button
    startScreen.style.opacity = '0';
    
    setTimeout(() => {
        startScreen.classList.add('hidden');
        futureMessage.classList.remove('hidden');

        let index = 0;

        function showNextLine() {
            if (index >= messages.length) {
                // Show Back Button at end
                setTimeout(() => {
                    backBtn.classList.remove('hidden');
                }, 2000);
                return;
            }

            // A. Create the new line
            const p = document.createElement('p');
            p.classList.add('scroll-line');
            p.innerText = messages[index];
            scrollContainer.appendChild(p);

            // B. Trigger Reflow
            void p.offsetWidth;

            // C. Get all lines currently in the DOM
            const allLines = document.querySelectorAll('.scroll-line:not(.exit)');

            // D. Manage States
            if (allLines.length > 0) {
                // Dim all previous lines
                allLines.forEach(line => {
                    line.classList.remove('highlight');
                    line.classList.add('visible');
                });

                // Highlight the VERY LAST one (the one we just added)
                const lastLine = allLines[allLines.length - 1];
                lastLine.classList.remove('visible');
                lastLine.classList.add('highlight');
            }

            // E. Remove Old Lines (If more than 3 active)
            if (allLines.length > 3) {
                // The oldest line is at index 0 of our selection
                const lineToRemove = allLines[0];
                
                // Add exit class to trigger collapse animation
                lineToRemove.classList.add('exit');
                lineToRemove.classList.remove('visible', 'highlight');

                // Wait for animation to finish, then remove from HTML
                setTimeout(() => {
                    lineToRemove.remove();
                }, 1500); 
            }

            index++;
            
            // F. Schedule next line (4.5 seconds for readability)
            setTimeout(showNextLine, 4500); 
        }

        // Start the loop
        showNextLine();

    }, 1000);
}