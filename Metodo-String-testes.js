const cidade = 'Sao Paulo - SP'

const pIndex = cidade.length - 2
let estadoIndex = cidade.slice(pIndex) // Ultilizando outra variavel
//console.log(estadoIndex)

let estado = cidade.slice(-2) //Utilizando metodo tradicional

//console.log(estado)

//======================================================================

const valor = 97.5

const valorString = String(valor)

const valorBR = valorString.replace('.', ',')

//console.log(valorBR)

//======================================================================

let numero = '1,350,000'
function replaceAll(number, text, newtext) {
  while (number !== number.replace(text, newtext)) {
    number = number.replace(text, newtext)
  }
  return number
}

//console.log(replaceAll(numero, ',', '.'))

//======================================================================

function printDada(dia, mes, ano) {
  dia = String(dia).padStart(2, '0')
  mes = String(mes).padStart(2, '0')
  console.log(`${dia}/${mes}/${ano}`)
}

printDada(11, 7, 1999)
