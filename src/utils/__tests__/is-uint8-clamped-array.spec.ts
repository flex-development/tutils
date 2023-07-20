/**
 * @file Unit Tests - isUint8ClampedArray
 * @module tutils/utils/tests/unit/isUint8ClampedArray
 */

import testSubject from '../is-uint8-clamped-array'

describe('unit:utils/isUint8ClampedArray', () => {
  it('should return false if value is not Uint8ClampedArray instance', () => {
    expect(testSubject(new Uint8Array())).to.be.false
  })

  it('should return true if value is Uint8ClampedArray instance', () => {
    expect(testSubject(new Uint8ClampedArray())).to.be.true
  })
})
