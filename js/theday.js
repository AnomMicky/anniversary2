document.addEventListener('DOMContentLoaded', function() {
    
    // --- ELEMENTS ---
    const leftChatBox = document.getElementById('chatLeft');
    const rightChatBox = document.getElementById('chatRight');
    const fastForward = document.getElementById('fastForward');
    const drumRoll = document.getElementById('drumRoll');
    const backBtn = document.getElementById('backBtn');
    
    const startOverlay = document.getElementById('startOverlay');
    const startBtn = document.getElementById('startBtn');
    const music = document.getElementById('bgMusic');

    // Helper: Add Message
    function addMessage(side, text, type) {
        const box = side === 'left' ? leftChatBox : rightChatBox;
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;
        msgDiv.innerText = text;
        box.appendChild(msgDiv);
        box.scrollTop = box.scrollHeight; 
    }

    // --- START SEQUENCE ---
    startBtn.addEventListener('click', () => {
        // 1. Play Music (From 22 seconds)
        music.currentTime = 30; // START AT 22 SECONDS
        music.play().catch(e => console.log("Audio error:", e));
        
        // 2. Hide Overlay
        startOverlay.style.opacity = 0;
        setTimeout(() => {
            startOverlay.style.display = 'none';
        }, 1000);

        // 3. Start The Chat
        startTimeline();
    });

    function startTimeline() {
        // PHASE 1: Initial Chat
        setTimeout(() => {
            addMessage('right', "Hey hon, Wanna talk for sometime?", 'sent');
            addMessage('left', "Hey hon, Wanna talk for sometime?", 'received');
        }, 1000);

        setTimeout(() => {
            addMessage('left', "Yess what's up hon?", 'sent');
            addMessage('right', "Yess what's up hon?", 'received');
        }, 2500);

        setTimeout(() => {
            addMessage('right', "What are we? 🤔", 'sent');
            addMessage('left', "What are we? 🤔", 'received');
        }, 4000);

        setTimeout(() => {
            addMessage('right', "Friends? Partners? What are we? 🤔", 'sent');
            addMessage('left', "Friends? Partners? What are we? 🤔", 'received');
        }, 6000);

        setTimeout(() => {
            addMessage('left', "Good question", 'sent');
            addMessage('right', "Good question", 'received');
        }, 8000);

        // PHASE 2: Fast Forward
        setTimeout(() => {
            fastForward.classList.remove('hidden');
        }, 10000);

        // PHASE 3: 3 Hours Later
        setTimeout(() => {
            fastForward.classList.add('hidden'); 
            
            const note = document.createElement('div');
            note.style.textAlign = 'center'; note.style.fontSize = '0.8rem'; note.style.color = '#888'; note.style.margin = '10px 0';
            note.innerText = "3 Hours Later";
            leftChatBox.appendChild(note.cloneNode(true));
            rightChatBox.appendChild(note);

        }, 13000);

        // Chat resumes...
        setTimeout(() => {
            addMessage('right', "Gehehehhehehe It's been three hours already 😮", 'sent');
            addMessage('left', "Gehehehhehehe It's been three hours already 😮", 'received');
        }, 14000);

        setTimeout(() => {
            addMessage('left', "Hehehehehe Yess, Didnt notice the time 🤭", 'sent');
            addMessage('right', "Hehehehehe Yess, Didnt notice the time 🤭", 'received');
        }, 16000);

        setTimeout(() => {
            addMessage('right', "So we have come to a conclusion on what we are 🤭", 'sent');
            addMessage('left', "So we have come to a conclusion on what we are 🤭", 'received');
        }, 18500);

        setTimeout(() => {
            addMessage('left', "Gehehehehehehe Yesssss 🤭", 'sent');
            addMessage('right', "Gehehehehehehe Yesssss 🤭", 'received');
        }, 22500);

        // The Trigger
        setTimeout(() => {
            addMessage('right', "*drum rolls intensify* 🥁", 'sent');
            addMessage('left', "*drum rolls intensify* 🥁", 'received');
        }, 24500);

        // PHASE 4: DRUM ROLL
        setTimeout(() => {
            drumRoll.classList.remove('hidden'); 
        }, 25500);

        // PHASE 5: PROPOSAL & END
        setTimeout(() => {
            drumRoll.classList.add('hidden'); 

            addMessage('left', "We are dating then 🤭", 'sent');
            addMessage('right', "We are dating then 🤭", 'received');

            // Show Back Button
            setTimeout(() => {
                backBtn.classList.remove('hidden');
            }, 2000);

        }, 28500);
    }

});