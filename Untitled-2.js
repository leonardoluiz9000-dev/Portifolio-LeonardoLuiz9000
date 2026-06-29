
const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");


botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("ativo");
});


const formulario = document.getElementById("formulario-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");


function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();


    if (nome === "" || email === "" || mensagem === "") {
        mensagemRetorno.textContent = "Por favor, preencha todos os campos.";
        mensagemRetorno.style.color = "#f87171";
        return;
    }


    if (!validarEmail(email)) {
        mensagemRetorno.textContent = "Por favor, digite um e-mail válido.";
        mensagemRetorno.style.color = "#f87171";
        return;
    }


    mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
    mensagemRetorno.style.color = "#4ade80";


    formulario.reset();
});