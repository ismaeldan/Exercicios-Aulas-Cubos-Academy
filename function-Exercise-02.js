function ageRange(idade) {
  if (idade <= 21) {
    return 'Jovem'
  } else if (idade <= 65) {
    return `Adulto(a)`
  } else {
    return 'Idoso(a)'
  }
}

const peopleDada = {
  name: 'Ismael',
  age: 21,
  job: 'Programador'
}

//let age = ageRange(peopleDada.age)

console.log(peopleDada, ageRange(peopleDada.age))
