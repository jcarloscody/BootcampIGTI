function calcularMontante(capital, taxa, periodo) {
  return arredondar(capital * Math.pow((1 + taxa), periodo - 1))
  // TODO
}

function arredondar(valor) {
  const precisao = 100
  const arredondado = Math.round(valor * precisao) / precisao
  return arredondado
}

module.exports = {
  calcularMontante,
  arredondar
}
