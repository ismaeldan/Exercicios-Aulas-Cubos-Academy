const professores = [
  { nome: 'Guido', stack: 'backend' },
  { nome: 'Vidal', stack: 'backend' },
  { nome: 'Dani', stack: 'frontend' },
  { nome: 'Diego', stack: 'frontend' },
  { nome: 'Léo', stack: 'backend' },
  { nome: 'Ruli', stack: 'frontend' }
]

const stackProfs = (nomeStack, arrayStacks) => {
  const resultado = arrayStacks.filter(nome => {
    return nome.stack === nomeStack
  })

  console.log(resultado)
}

stackProfs('backend', professores)

stackProfs('frontend', professores)
