const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirTarefa(){
    display.innerHTML = input.value
}

button.addEventListener("click", inserirTarefa)