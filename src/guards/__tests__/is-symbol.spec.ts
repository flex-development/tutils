/**
 * @file Unit Tests - isSymbol
 * @module tutils/guards/tests/unit/isSymbol
 */

import testSubject from '../is-symbol'

describe('unit:guards/isSymbol', () => {
  it('should return false if value is not a symbol', () => {
    expect(testSubject(BigInt(faker.number.int()))).to.be.false
  })

  it('should return true if value is a symbol', () => {
    expect(testSubject(Symbol('is-symbol'))).to.be.true
  })
})
