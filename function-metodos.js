const peopleDada = {
  name: 'Ismael',
  age: 21,
  job: 'Programador',
  toPresent: function () {
    const secondAgeRange = this.ageRange(this.age)

    console.log(
      `Sou ${this.name}, sou um ${secondAgeRange} de ${this.age} e sou ${this.job}`
    )
  },

  ageRange: function () {
    if (this.age <= 21) {
      return 'Jovem'
    } else if (this.age <= 65) {
      return `Adulto(a)`
    } else {
      return 'Idoso(a)'
    }
  }
}

peopleDada.toPresent()
