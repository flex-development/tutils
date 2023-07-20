/**
 * @file Unit Tests - isFalse
 * @module tutils/utils/tests/unit/isFalse
 */

import testSubject from '../is-false'

describe('unit:utils/isFalse', () => {
  it('should return false if value is not false', () => {
    expect(testSubject(0)).to.be.false
  })

  it('should return true if value is false', () => {
    expect(testSubject(false)).to.be.true
  })
})
