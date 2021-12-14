function calcularMontante(capital, taxa, periodo) {
  return arredondar(capital * Math.pow((1 + taxa), periodo - 1))
  // TODO
}

function arredondar(valor) {
  const precisao = 100
  const arredondado = Math.round((valor + Number.EPSILON) * precisao) / precisao
  return arredondado
}

function calcularPrestacoes(montante, numeroParcelas) {
  const prestacoesBase = arredondar(montante / numeroParcelas)
  const resultado = Array(numeroParcelas).fill(prestacoesBase)

  let somaPrestacoes = resultado.reduce((a, t) => a + t)
  let diferenca = arredondar(montante - somaPrestacoes)
  let i = 0

  while (diferenca != 0) {
    resultado[i] = resultado[i] + 0.01
    diferenca = arredondar(montante - somaPrestacoes)
    i++;
  }

  return resultado;
}
module.exports = {
  calcularMontante,
  arredondar,
  calcularPrestacoes
}
