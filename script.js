// Seleciona os elementos do menu mobile
const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");

// Mostra ou esconde o menu em telas menores
botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("ativo");
});

// Seleciona o formulário e a mensagem de retorno
const formulario = document.getElementById("formulario-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");

// Função para verificar se o e-mail possui formato válido
function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}

// Validação do formulário de contato
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
        mensagemRetorno.style.color = "#f87171";
        return;
    }

    // Verifica se o e-mail informado é válido
    if (!validarEmail(email)) {
        mensagemRetorno.textContent = "Por favor, digite um e-mail válido.";
        mensagemRetorno.style.color = "#f87171";
        return;
    }

    // Simulação de envio do formulário
    mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
    mensagemRetorno.style.color = "#4ade80";

    // Limpa os campos após o envio
    formulario.reset();
});
