const personalDados = [
  {
    name: 'Ismael',
    age: 26
  },
  {
    name: 'Claudia',
    age: 51
  },
  {
    name: 'Teyce',
    age: 31
  },
  {
    name: 'Fernanda',
    age: 24
  }
]

function callDados() {
  for (let index = 0; index < personalDados.length; index++) {
    console.log(
      `My name is ${personalDados[index].name}, have ${personalDados[index].age} yers`
    )
  }
}

callDados()
