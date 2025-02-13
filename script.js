document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["😂", "😜", "💖", "🥰", "💘"];
    
    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = "100vh";
        emoji.style.animationDuration = `${Math.random() * 3 + 3}s`;

        setTimeout(() => emoji.remove(), 5000);
    }

    setInterval(createEmoji, 500);
});
