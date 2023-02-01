/**
 * @file Unit Tests - isString
 * @module tutils/guards/tests/unit/isString
 */

import testSubject from '../is-string'

describe('unit:guards/isString', () => {
  it('should return false if value is not a string', () => {
    expect(testSubject(faker.number.int())).to.be.false
  })

  it('should return true if value is a string', () => {
    expect(testSubject(faker.string.sample())).to.be.true
  })
})
