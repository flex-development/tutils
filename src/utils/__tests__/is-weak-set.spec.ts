/**
 * @file Unit Tests - isWeakSet
 * @module tutils/utils/tests/unit/isWeakSet
 */

import testSubject from '../is-weak-set'

describe('unit:utils/isWeakSet', () => {
  it('should return false if value is not WeakSet instance', () => {
    expect(testSubject(new WeakMap())).to.be.false
  })

  it('should return true if value is WeakSet instance', () => {
    expect(testSubject(new WeakSet())).to.be.true
  })
})
