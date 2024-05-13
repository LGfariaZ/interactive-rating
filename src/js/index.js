const notas = document.querySelectorAll(".nota");
const containerAvaliacao = document.getElementById("avaliacao");
const containerEnviado = document.getElementById("enviado");
const botaoEnviar = document.getElementById("enviar-avaliacao");

notas.forEach(function(nota){
    nota.addEventListener("click", function(){
        
        const notalSelecionadaAtual = document.querySelector(".selecionada");

        if(notalSelecionadaAtual){
            notalSelecionadaAtual.classList.remove("selecionada");
        }

        nota.classList.add("selecionada");
    })
})

botaoEnviar.addEventListener("click", function(){
    
    const notalSelecionadaAtual = document.querySelector(".selecionada");

    containerAvaliacao.classList.add("esconder");
    containerEnviado.classList.remove("esconder");

    const notaEscolhida = document.querySelector(".nota-escolhida");

    notaEscolhida.innerHTML = notalSelecionadaAtual.value;
})

