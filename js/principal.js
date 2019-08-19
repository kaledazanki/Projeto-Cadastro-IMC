let titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

let paciente = document.querySelector("#primeiro-paciente")

let tdpeso = paciente.querySelector(".info-peso")
let peso = tdpeso.textContent

let tdaltura = paciente.querySelector(".info-altura")
let altura = tdaltura.textContent

let tdimc = paciente.querySelector(".info-imc")



let validoPeso = true
let alturaValida = true
if(peso <= 0  || peso >= 1000){
    tdimc.textContent = "Peso invalido"
    validoPeso = false
 
}
if(altura <= 0 || altura >= 4){
    tdimc.textContent = "Altura invalida"
    alturaValida = false
}

if(validoPeso && alturaValida){
    let imc = peso / (altura * altura)
    tdimc.textContent = imc
}