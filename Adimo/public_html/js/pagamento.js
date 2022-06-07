ativaBotaoPagamento();

function ativaBotaoPagamento() {
    const accordionButton = document.querySelectorAll(".accordion-button");
    accordionButton.forEach(accordionButton => {
        accordionButton.addEventListener("click", () => {
            let botao = accordionButton.textContent.trim();
            let num = 0;
            if (botao === "Cartão de Crédito") {
                num = 1;
            } else if (botao === "Pix") {
                num = 2;
            } else {
                num = 3;
            }
            let accordionContent = document.querySelector("#accordion-content" + num);
            let className = accordionContent.classList;
            if (className.contains("collapse")) {
                accordionContent.className = "accordion-content";
            } else {
                accordionContent.className = "accordion-content collapse";
            }
        });
    });
}