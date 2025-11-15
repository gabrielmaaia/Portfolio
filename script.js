const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msgInput = document.querySelector("#msg")
const submitButton = document.querySelector("#submit-button")
const mensagemBox = document.querySelector("#mensagem-box")
const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|yahoo)\.com$/;

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const msgValue = msgInput.value.trim();

    if (nameValue === "" || emailValue === "" || msgValue === "") {
        showMessage("Preencha todos os campos corretamente!", "erro");
        return;
    }

    if (!nomeRegex.test(nameValue)) {
        showMessage("O nome deve contar apenas letras!", "erro");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        showMessage("Digite um email válido do Gmail, Hotmail, Outlook ou Yahoo!", "erro");
        return;
    }

    showMessage("Mensagem enviada com sucesso!", "sucesso");

    nameInput.value = ""
    emailInput.value = ""
    msgInput.value = ""
});

function showMessage(text, type) {
    mensagemBox.textContent = text;
    
    mensagemBox.className = "fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-medium text-center shadow-lg transition-all duration-500 z-50 opacity-0";

    if (type === "erro") {
        mensagemBox.classList.add("bg-red-500/90","text-white","shadow-red-600/30");
    } else {
        mensagemBox.classList.add("bg-green-600/90","text-white","shadow-green-600/30");
    }

    mensagemBox.classList.remove("hidden");
    setTimeout(() => mensagemBox.classList.add("opacity-100","translate-y-2"), 10);

    setTimeout(() => {
        mensagemBox.classList.remove("opacity-100", "translate-y-2")
        messageBox.classList.add("opacity-0");
        setTimeout(() => mensagemBox.classList.add("hidden"), 500);
    }, 3000);
}

