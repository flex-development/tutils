/**
 * @file Unit Tests - isTrue
 * @module tutils/utils/tests/unit/isTrue
 */

import testSubject from '../is-true'

describe('unit:utils/isTrue', () => {
  it('should return false if value is not true', () => {
    expect(testSubject(1)).to.be.false
  })

  it('should return true if value is true', () => {
    expect(testSubject(true)).to.be.true
  })
})
