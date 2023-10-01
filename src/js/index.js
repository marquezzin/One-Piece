// Quando selecionar o botao, marcar o botao como selecionado
// document seria o conteudo html


// pega todos com o seletor botao, vira uma lista
const botoes = document.querySelectorAll('.botao')
// lista de personagens
const personagens = document.querySelectorAll(".personagem") //personagem selecionado faz parte do seletor personagem

//  adicionar a classe selecionado no botão que o usuario clicou
botoes.forEach((botao,indice) => { //parametro na segunda posicao eh o index , do JS
    botao.addEventListener("click", () =>{
        // verificar se ja existe um selecionado,se sim,removê-lo
        desselecionarButao();
        desselecionarPersonagem();//remove o atual
        botao.classList.add("selecionado")//adicionando classe nova no botão
        personagens[indice].classList.add("selecionado")//novo selecionado
    })
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado"); //buscou o personagem selecionado
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarButao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado"); //buscou o seletor botao selecionado
    botaoSelecionado.classList.remove("selecionado");
}

