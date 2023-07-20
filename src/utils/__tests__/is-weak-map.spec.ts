/**
 * @file Unit Tests - isWeakMap
 * @module tutils/utils/tests/unit/isWeakMap
 */

import testSubject from '../is-weak-map'

describe('unit:utils/isWeakMap', () => {
  it('should return false if value is not WeakMap instance', () => {
    expect(testSubject(new WeakSet())).to.be.false
  })

  it('should return true if value is WeakMap instance', () => {
    expect(testSubject(new WeakMap())).to.be.true
  })
})
