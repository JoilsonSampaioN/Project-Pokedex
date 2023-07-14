const botaoAlterarTema = document.getElementById("botao-alterar-tema");
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

    const botaoAbrirListaDeGeracoes = document.getElementById("botao-abrir-lista")
    const listaDeGeracoes = document.getElementById("lista-de-geracoes")    
    botaoAbrirListaDeGeracoes.addEventListener('click',()=>{
        if(listaDeGeracoes.style.display === "block"){
            listaDeGeracoes.style.display = "none";
        }else{
            listaDeGeracoes.style.display = "block";
        }
    })