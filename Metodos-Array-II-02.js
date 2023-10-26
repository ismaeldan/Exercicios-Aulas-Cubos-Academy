const arquivos = [
  'teste.txt',
  'foto.png',
  'contrato.doc',
  'instalador.exe',
  'instaalador.bat'
]

const varrerPC = arquivos.some(procurar => {
  const verificador = procurar.indexOf('.bat')
  return verificador !== -1
})

if (varrerPC) {
  console.log('Achou')
} else {
  console.log('Pc Limpo')
}
