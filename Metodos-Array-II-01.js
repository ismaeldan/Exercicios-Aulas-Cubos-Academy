const usuarios = [
  { nome: 'Ismael', idade: 26 },
  { nome: 'Claudia', idade: 51 },
  { nome: 'Teyce', idade: 31 },
  { nome: 'Fernanda', idade: 23 }
]

const fiscaliza = arrayIdade => {
  const resultado = arrayIdade.every(idade => {
    return idade.idade > 17
  })

  if (resultado) {
    console.log('Festa Liberada')
  } else {
    console.log('Possí menor de idade')
  }
}

fiscaliza(usuarios)
