/*do html= ids*/
const Menu = document.getElementById("Menu")
const BotaodeAdd = document.getElementById("adicionar")
const BotaodeRmv = document.getElementById("remover")
const inputAdd = document.getElementById("inpuAdd")
const inputRmv = document.getElementById("inpuRMV")
const TarefasCont = document.getElementById("ConteinerTarefas")
/*do css= classes*/
const inputA = document.querySelector(".inputAdd")
const addy = document.querySelector(".add")
const rmvy = document.querySelector(".rmv")
const gi = document.querySelector(".cxz")
const inputR = document.querySelector(".inputRMV")
/*função do botão de menu*/
const BotaoMenu = function() {
     if(addy.style.display === "none") {
        addy.style.display = "block"
         rmvy.style.display = "block"
    }
    else {
        addy.style.display = "none"
        inputA.style.display = "none"
        rmvy.style.display = "none"
        inputR.style.display = "none"
    }
}
/*função do adicionar*/
 const BotaoAdd = function() {
     if(inputA.style.display === "none") {
        inputA.style.display = "block"
    }
    else {
        inputA.style.display = "none"
        inputA.value = ""
    }
 }
/*para remover*/
const TrmvT = function() {
    this.parentElement.remove()
}
/*para Concluir*/
sin = "✓"
const TcliT = function() {
   ay = this.parentElement.firstChild.textContent
   if(ay.indexOf(sin) === -1) {
      this.parentElement.firstChild.textContent += sin
   }
   else {
     this.parentElement.firstChild.textContent = this.parentElement.firstChild.textContent.replace(sin, "")
   }
}
/*variaveis de apoio da "Função da entrada do adicionar*/
let i = 1
let TarefaID = ""
let Tarefas = []
let ListaDeIdsDasTarefas = []
/*Função da entrada do adicionar*/
const EntradaAdd = function(event) {
    if(event.key === "Enter") {
        if(inputAdd.value === "") {
            alert("preencha os campos")
        }
        else {
           if(inputAdd.value.length <= 17) {
                nomeDaTarefa = inputAdd.value
                Tarefas.push(nomeDaTarefa)
                const Tarefa = document.createElement("div")
                const TarefaRMV = document.createElement("div")
                const TarefaCLI = document.createElement("div")
                TarefaRMV.textContent = "-"
                TarefaCLI.textContent = "✓"
                Tarefa.textContent = Tarefas[i-1]
                TarefasCont.appendChild(Tarefa)
                Tarefa.appendChild(TarefaRMV)
                Tarefa.appendChild(TarefaCLI)
                Tarefa.classList.add("cxz")
                TarefaRMV.classList.add("rmvT")
                TarefaCLI.classList.add("cliT")
                TarefaRMV.addEventListener('click', TrmvT)
                TarefaCLI.addEventListener('click', TcliT)
                i += 1
                inputAdd.value = ""
           }
           else {
              alert("texto muito grande")
              inputAdd.value = ""
           }
        }
    }
}
/*botão de Menu*/
Menu.addEventListener('click', BotaoMenu)
/*botão de adicionar*/
BotaodeAdd.addEventListener('click', BotaoAdd)
/*entrada do adicionar, remover e concluir*/
inputAdd.addEventListener('keyup', EntradaAdd)




