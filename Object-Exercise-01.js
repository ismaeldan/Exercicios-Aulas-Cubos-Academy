const peopleData = {
  name: 'Ismael',
  age: 26,
  heigh: 1.83,
  driveLicense: true,
  surname: ['Mael', 'Iel', 'Isma']
}

if (peopleData.driveLicense) {
  console.log(
    `${peopleData.name} tem ${peopleData.age} anos, ${peopleData.heigh}m de altura, possui CNH e os apelidos:`
  )
  for (let apelido of peopleData.surname) {
    console.log(`- ${apelido}`)
  }
} else {
  console.log(
    `${peopleData.name} tem ${peopleData.age} anos, ${peopleData.heigh}m de altura, não possui CNH e os apelidos:`
  )
  for (let apelido of peopleData.surname) {
    console.log(`- ${apelido}`)
  }
}

peopleData.name = 'Jose'
peopleData.age = 30
peopleData.heigh = 1.73
peopleData.driveLicense = false
peopleData.surname = ['Jr', 'Juninho']

if (peopleData.driveLicense) {
  console.log(
    `${peopleData.name} tem ${peopleData.age} anos, ${peopleData.heigh}m de altura, possui CNH e os apelidos:`
  )
  for (let apelido of peopleData.surname) {
    console.log(`- ${apelido}`)
  }
} else {
  console.log(
    `${peopleData.name} tem ${peopleData.age} anos, ${peopleData.heigh}m de altura, não possui CNH e os apelidos:`
  )
  for (let apelido of peopleData.surname) {
    console.log(`- ${apelido}`)
  }
}
