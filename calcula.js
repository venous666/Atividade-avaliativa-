const historico = new Array()


const calcular = function(){
    let x = document.getElementById('peso').value 
    let y = document.getElementById('altura').value 
    z = parseFloat(x) / parseFloat(y*y) 
    document.getElementById('imc').value = z
    historicoimc = `${x}/${y}=${z}`
    historico.push(historicoimc)
    console.log(historico)
}

const limpar = function(){
    document.getElementById('peso').value = "limpar"
    document.getElementById('altura').value = "limpar"
    document.getElementById('imc').value = "limpar"
}