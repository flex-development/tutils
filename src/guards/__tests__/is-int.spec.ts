/**
 * @file Unit Tests - isInt
 * @module tutils/guards/tests/unit/isInt
 */

import testSubject from '../is-int'

describe('unit:guards/isInt', () => {
  it('should return false if value is not an integer', () => {
    expect(testSubject(faker.number.float({ min: 0.13 }))).to.be.false
  })

  it('should return true if value is an integer', () => {
    expect(testSubject(faker.number.int())).to.be.true
  })
})
