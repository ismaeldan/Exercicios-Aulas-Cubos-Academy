function ageRange(idade) {
  if (idade <= 21) {
    return 'Jovem'
  } else if (idade <= 65) {
    return `Adulto(a)`
  } else {
    return 'Idoso(a)'
  }
}

function dada(ismael) {
  return `olá! Meu nome é ${ismael.name}, sou um ${ageRange(
    peoploDada.age
  )} de ${ismael.age} anos, ${ismael.height}m de altura e sou ${ismael.job}`
}

//let age = ageRange(peopleDada.age)

const peoploDada = {
  name: 'Ismael',
  job: 'Programador',
  age: 26,
  height: 1.83
}
console.log(dada(peoploDada))
