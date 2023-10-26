const carros = [
  { nomeMarca: 'Chevrolet', modelo: 'Monza', ano: 1989, cor: 'Prata' },
  { nomeMarca: 'Volkswagen', modelo: 'Gol', ano: 2013, cor: 'Prata' },
  { nomeMarca: 'Honda', modelo: 'CRV', ano: 2008, cor: 'Preto' },
  { nomeMarca: 'Volkswagen', modelo: 'Santana', ano: 2000, cor: 'Branco' }
]

const buscaMarcas = (marca, arrayCarros) => {
  return arrayCarros.find(carro => {
    return carro.nomeMarca === marca
  })
}

console.log(buscaMarcas('Honda', carros))
