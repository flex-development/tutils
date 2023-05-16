/**
 * @file Unit Tests - isSet
 * @module tutils/utils/tests/unit/isSet
 */

import testSubject from '../is-set'

describe('unit:utils/isSet', () => {
  it('should return false if value is not Set instance', () => {
    expect(testSubject(new WeakSet())).to.be.false
  })

  it('should return true if value is Set instance', () => {
    expect(testSubject(new Set())).to.be.true
  })
})
