/**
 * @file Unit Tests - isMap
 * @module tutils/utils/tests/unit/isMap
 */

import testSubject from '../is-map'

describe('unit:utils/isMap', () => {
  it('should return false if value is not Map instance', () => {
    expect(testSubject(new WeakMap())).to.be.false
  })

  it('should return true if value is Map instance', () => {
    expect(testSubject(new Map())).to.be.true
  })
})
