const botao = document.getElementById("btn-vermais");
const texto = document.getElementById("texto-extra");

botao.addEventListener("click", () => {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Ver menos";
    } else {
        texto.style.display = "none";
        botao.textContent = "Ver mais";
    }
});

const btnTema = document.getElementById("tema-btn");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Escuro";
    }
});

const formulario = document.querySelector("form");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada para a XTRANHO Company.`;

    formulario.reset();
});
