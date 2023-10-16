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

console.log(`Nome : ${cardConsumption.nameClient}
Idade: ${cardConsumption.ageClient}`)

cardConsumption.ageClient = 27

console.log(`Idade corrigida: ${cardConsumption.ageClient}`)

console.log(`01:
Nome do produto: ${cardConsumption.productConsumption[0].nameProduct}`)

console.log(`03:
Preço Unitario: ${
  cardConsumption.productConsumption[productConsumption.length - 1].priceUnit
}`)
