let btnAdicionar = document.querySelector("#buscar-pacientes");

btnAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");

    let xhr = new XMLHttpRequest() //instanciar um XMLHttp para fazer utilizar na requisição

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") // abre "uma nova aba" com GET + a api desejada
    xhr.addEventListener("load", function(){ // load para ser na hroa do carregamento
        if(xhr.status == 200){
            let erroajax = document.querySelector("#erro-ajax")
            erroajax.classList.add("invisivel")
            let resposta = xhr.responseText //response text é o texte de resposta da requisição http
            paciente = JSON.parse(resposta)
            console.log(paciente)
            paciente.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            })
            
        }else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            let erroajax = document.querySelector("#erro-ajax")
            erroajax.classList.remove("invisivel")
        }
       
       
        
    })


    xhr.send() //enviar a requisição

    // const res =  await fetch("https://api-pacientes.herokuapp.com/pacientes")
    // const json=  await res.json()
    // console.log(json)

//    const res = await fetch("https://api-pacientes.herokuapp.com/pacientes")
//     console.log( await res.json())
//     console.log('fim')


});