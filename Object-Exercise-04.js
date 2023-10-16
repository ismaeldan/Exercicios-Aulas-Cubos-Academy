const productConsumption = [
  {
    nameProduct: 'Coca Cola',
    priceUnit: 700,
    quantity: 2
  },
  {
    nameProduct: 'Sorvete',
    priceUnit: 1050,
    quantity: 1
  },
  {
    nameProduct: 'batata Cone',
    priceUnit: 800,
    quantity: 2
  }
]

const cardConsumption = {
  nameClient: 'Ismael',
  ageClient: 26,
  productConsumption
}

let soma = 0

for (let product of productConsumption) {
  soma += product.priceUnit * product.quantity
}

let resultadoFinal = (soma / 100).toFixed(2)

console.log(`Ola ${cardConsumption.nameClient}
Sua conta deu: R$${resultadoFinal}`)
