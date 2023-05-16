/**
 * @file Unit Tests - isUppercase
 * @module tutils/utils/tests/unit/isUppercase
 */

import testSubject from '../is-uppercase'

describe('unit:utils/isUppercase', () => {
  it('should return false if value is not uppercase string', () => {
    expect(testSubject(faker.string.sample().toLowerCase())).to.be.false
  })

  it('should return true if value is uppercase string', () => {
    expect(testSubject(faker.string.sample().toUpperCase())).to.be.true
  })
})
