/**
 * @file Unit Tests - isNumeric
 * @module tutils/guards/tests/unit/isNumeric
 */

import testSubject from '../is-numeric'

describe('unit:guards/isNumeric', () => {
  it('should return false if value is not a numeric', () => {
    expect(testSubject(faker.string.sample())).to.be.false
  })

  it('should return true if value is a numeric', () => {
    expect(testSubject(faker.string.numeric())).to.be.true
  })
})
