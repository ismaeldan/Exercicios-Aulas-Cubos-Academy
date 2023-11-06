const usuarios = [
  { id: 11, nome: 'joao', idade: 23 },
  { id: 2, nome: 'maria', idade: 18 },
  { id: 4, nome: 'ana', idade: 30 },
  { id: 1, nome: 'rodrigo', idade: 17 },
  { id: 123, nome: 'rodrigo', idade: 17 }
]

const maiorIdade = usuarios.reduce((acumulador, atual) => {
  let maior = acumulador

  if (atual.idade > maior.idade) {
    maior = atual
  }

  return maior
})

console.log(maiorIdade)
