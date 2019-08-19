let tabela = document.querySelector("table")



tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){ //setar o tempo que a funcao vai executar 
    event.target.parentNode.remove() // parentNode é o pai do nó no caso o pai do target
    }, 500)
})


