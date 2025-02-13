document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["😂", "😜", "😝", "🥰", "🥳","🤭"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // Posición inicial
        emoji.style.position = "fixed";
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.bottom = "0"; // Aparece desde abajo
        emoji.style.fontSize = `${Math.random() * 30 + 30}px`; // Tamaño aleatorio
        emoji.style.opacity = "0.9";
        
        // Animación
        emoji.style.transition = `transform ${Math.random() * 3 + 3}s linear, opacity 4s`;
        setTimeout(() => {
            emoji.style.transform = "translateY(-100vh)"; // Sube
            emoji.style.opacity = "0"; // Se desvanece
        }, 100);

        setTimeout(() => emoji.remove(), 5000);
    }

    setInterval(createEmoji, 500);
});

