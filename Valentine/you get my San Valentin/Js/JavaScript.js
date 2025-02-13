document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["❤️", "😍", "💖", "🥰", "💘"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // Posición y duración aleatoria
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = "100px";
        emoji.style.animationDuration = `${Math.random() * 3 + 3}s`;

        // Eliminar el emoji después de la animación
        setTimeout(() => emoji.remove(), 5000);
    }

    // Generar emojis cada 500ms
    setInterval(createEmoji, 500);
});


