const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const memory = document.querySelector("#memory");
const hiddenText = document.querySelector("#hidden-text");
const typingText = document.querySelector("#typing-text");

const text = hiddenText.dataset.text;

memory.addEventListener("click", () => {

    hiddenText.classList.add("show");

    typingText.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            typingText.textContent += text[index];

            index++;

            setTimeout(type, 50);
        }
    }

    type();
});

yesButton.addEventListener("click", () => {

    alert("Então vamos escrever esse capítulo juntos ❤️");

});

noButton.addEventListener("mouseover", () => {
    noButton.textContent = "não ACREDITO que tu sequer passou o mouse em cima do botão 'não'...";
});

noButton.addEventListener("mouseout", () => {
    noButton.textContent = "Ainda não";
});

noButton.addEventListener("click", () => {

    alert("Tudo bem... mas eu precisava perguntar.");

});