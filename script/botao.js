// Limites e incrementos
const maxClicks = 5;
let increaseClicks = 0; // Contador para cliques no botão de aumentar
let decreaseClicks = 0; // Contador para cliques no botão de diminuir
const increment = 0.1; // Incremento em em

// Selecionar os elementos HTML
const increaseFontButton = document.getElementById("increase-font");
const decreaseFontButton = document.getElementById("decrease-font");
const body = document.body; // O corpo da página
let currentFontSize = parseFloat(getComputedStyle(body).fontSize); // Tamanho inicial da fonte

// Função para aumentar a fonte
increaseFontButton.addEventListener("click", () => {
    if (increaseClicks < maxClicks) {
        currentFontSize += increment * 16; // Convertendo em para px
        body.style.fontSize = `${currentFontSize}px`;
        increaseClicks++;
        decreaseClicks = Math.max(decreaseClicks - 1, 0); // Reduz o contador de diminuição
    }
});

// Função para diminuir a fonte
decreaseFontButton.addEventListener("click", () => {
    if (decreaseClicks < maxClicks && increaseClicks > 0) {
        currentFontSize -= increment * 16; // Convertendo em para px
        body.style.fontSize = `${currentFontSize}px`;
        decreaseClicks++;
        increaseClicks = Math.max(increaseClicks - 1, 0); // Reduz o contador de aumento
    }
});
