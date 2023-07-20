/**
 * @file Unit Tests - isUint8Array
 * @module tutils/utils/tests/unit/isUint8Array
 */

import testSubject from '../is-uint8-array'

describe('unit:utils/isUint8Array', () => {
  it('should return false if value is not Uint8Array instance', () => {
    expect(testSubject(new Int8Array())).to.be.false
  })

  it('should return true if value is Uint8Array instance', () => {
    expect(testSubject(new Uint8Array())).to.be.true
  })
})
