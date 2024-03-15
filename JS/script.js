const entradaTarefa = document.getElementById("entradaTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const tarefasConcluidas = document.getElementById("tarefasConcluidas")

botaoAdicionar.addEventListener("click", adicionarTarefa);
inputTarefa.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    adicionarTarefa();
    }
});

function adicionarTarefa() {
    const tarefaTexto = entradaTarefa.value.trim();
    if (tarefaTexto !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefaTexto;
        novaTarefa.classList.add("tarefa");

        const botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "Concluir";
        botaoConcluir.classList.add("botaoConcluir")

        botaoConcluir.addEventListener("click",function() {
            novaTarefa.removeChild(botaoConcluir)
            novaTarefa.appendChild(botaoExcluir);
            tarefasConcluidas.appendChild(novaTarefa);
        })
       
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("botaoExcluir")
        botaoExcluir.addEventListener("click", function() {
            tarefasConcluidas.removeChild(novaTarefa)
        });

        novaTarefa.appendChild(botaoConcluir);
        listaTarefas.appendChild(novaTarefa);
        
        inputTarefa.value = "";
    }
}