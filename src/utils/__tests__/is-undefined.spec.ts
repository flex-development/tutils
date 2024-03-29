/**
 * @file Unit Tests - isUndefined
 * @module tutils/utils/tests/unit/isUndefined
 */

import testSubject from '../is-undefined'

describe('unit:utils/isUndefined', () => {
  it('should return false if value is not undefined', () => {
    expect(testSubject(faker.date.anytime())).to.be.false
  })

  it('should return true if value is undefined', () => {
    expect(testSubject(undefined)).to.be.true
  })
})
