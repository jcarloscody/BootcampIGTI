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


describe('calcularPrestacoes', () => {
    test('o numero de parcelas é igual ao numero de prestacoes', () => {

        const numeroPrestacoes = 6
        const prestacoes = calculaValor.calcularPrestacoes(200, numeroPrestacoes)
        expect(prestacoes.lenght).toBe(numeroPrestacoes)
    })

    test('uma unica prestacao e o valor sera igual ao montatnte', () => {
        const numeroPrestacoes = 1
        const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

        expect(prestacoes.length).toBe(numeroPrestacoes)
        expect(prestacoes[0]).toBe(50)
    })

    test('duas prestacoes valor igual a metadade do montante', () => {
        const numeroPrestacoes = 2
        const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

        expect(prestacoes.length).toBe(numeroPrestacoes)
        expect(prestacoes[0]).toBe(25)
        expect(prestacoes[1]).toBe(25)
    })

    test.only('valor da soma das prestacoes deve ser igual ao montante com duas casas decimais', () => {
        //debugger;//para debugar

        //dado
        const numeroPrestacoes = 3
        const montante = 100
        //quando
        const prestacoes = calculaValor.calcularPrestacoes(montante, numeroPrestacoes)
        //entao
        expect(prestacoes.length).toBe(numeroPrestacoes)
        const soma = calculaValor.arredondar(prestacoes[0] + prestacoes[1] + prestacoes[2])
        expect(soma).toBe(montante)

        for (let index = 0; index < prestacoes.length - 1; index++) {
            const j = i + 1;

            expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[i])

        }
        //para debugar :: node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand    | exit - para sair 
    })
})
