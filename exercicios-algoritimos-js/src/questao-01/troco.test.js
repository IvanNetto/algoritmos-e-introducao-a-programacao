/* eslint-env jest */
const troco = require('./troco')

describe('QUESTÃO 1 - RETORNAR O TROCO DADO O VALOR PAGO E O VALOR DO PRODUTO', () => {
    test('DADO OS VALORES 10 E 2.50 DEVE RETORNAR 7.50', () => {
      const given = {
        valorPago: 10,
        valorProduto: 2.50
      }
  
      const expected = 7.50
  
      const actual = troco(given.valorPago, given.valorProduto)
      expect(actual).toEqual(expected)
    })
  })