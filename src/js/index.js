const botaoAlterarTema = document.getElementById("botao-alterar-tema");
console.log(botaoAlterarTema)
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");
    if (ModoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else { imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
    });
    

