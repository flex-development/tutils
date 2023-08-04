/**
 * @file Unit Tests - isArray
 * @module tutils/utils/tests/unit/isArray
 */

import testSubject from '../is-array'

describe('unit:utils/isArray', () => {
  it('should return false if value is not an array', () => {
    expect(testSubject(vi.fn())).to.be.false
  })

  it('should return true if value is an array', () => {
    expect(testSubject([0, 1, 2, 3, 4])).to.be.true
  })
})
