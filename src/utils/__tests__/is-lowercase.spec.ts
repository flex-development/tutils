/**
 * @file Unit Tests - isLowercase
 * @module tutils/utils/tests/unit/isLowercase
 */

import testSubject from '../is-lowercase'

describe('unit:utils/isLowercase', () => {
  it('should return false if value is not lowercase string', () => {
    expect(testSubject(faker.string.sample().toUpperCase())).to.be.false
  })

  it('should return true if value is lowercase string', () => {
    expect(testSubject(faker.string.sample().toLowerCase())).to.be.true
  })
})
