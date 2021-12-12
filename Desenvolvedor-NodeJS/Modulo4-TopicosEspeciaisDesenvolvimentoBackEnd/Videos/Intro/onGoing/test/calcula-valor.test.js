const calculaValor = require('../src/calcula-valor.js')  //pega onde está os codigos da aplicacao

test('COm uma prestacao o montante é igual ao capital', () => {   //test('nome referente ao test',a funcao que será testada
    // Operação
    const montante = calculaValor.calcularMontante(100, 0.0175, 1)
    // Resultado esperado
    expect(montante).toBe(100) //aqui vem a biblioteca de acertivas do jest, onde eu declaro o que eu espero de um comportamento
})

test('COm 4 prestacao o montante é acrescido de juros', () => {
    // Operação
    const montante = calculaValor.calcularMontante(100, 0.0175, 1)

    // Resultado esperado - assetiva
    expect(montante).toBe(100)
    /// expect(montante).toBeCloseTo(100)  //essa assertiva vai arredondar o numero, mas é necessário fazer a função que retorne o valor arredondado
})

// outra forma de elaborar test com jesk
/* describe('calcularMontante', () => {
    test('COm uma prestacao o montante é igual ao capital', () => {
        const montante = calculaValor.calcularMontante(100, 0.0175, 1)
        expect(montante).toBe(100)
    })

    test('COm 4 prestacao o montante é acrescido de juros', () => {
        const montante = calculaValor.calcularMontante(100, 0.0175, 1)
        expect(montante).toBe(107)
    })
}) */

describe('Arredondar', () => {
    test('Arredondar em duas casas decimais', () => {
        const resultado = calculaValor.arredondar(538.4453124999998)
        expect(resultado).toBe(538.45)
    })

    test('1.006 deve retornar 1.01', () => {
        const resultado = calculaValor.arredondar(1.006)
        expect(resultado).toBe(1.01)
    })
})
