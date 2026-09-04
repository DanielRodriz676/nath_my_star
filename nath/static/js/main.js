const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const memory = document.querySelectorAll("#memory");



memory.forEach((memory) => {

    memory.addEventListener("click", () => {

        const hiddenText = memory.querySelector("#hidden-text");
        const typingText = hiddenText.querySelector("#typing-text");
        const text = hiddenText.dataset.text;

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

});



yesButton.addEventListener("click", () => {

    alert("Então vamos escrever esse capítulo juntos ❤️");

});

yesButton.addEventListener("mouseover", () => {

    yesButton.textContent ="Sim ❤️, boraaa aperta isso ai vai";

});

yesButton.addEventListener("mouseout", () => {

    yesButton.textContent = "Sim ❤️";

});


noButton.addEventListener("mouseover", () => {
    noButton.textContent = "não ACREDITO que tu sequer passou o mouse em cima do botão 'não'...";
});

noButton.addEventListener("mouseout", () => {
    noButton.textContent = "Ainda não";
});

noButton.addEventListener("click", () => {

    noButton.textContent = "Não é uma opção, vamos escrever esse capítulo juntos ❤️";

});