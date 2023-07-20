/**
 * @file Unit Tests - isUint32Array
 * @module tutils/utils/tests/unit/isUint32Array
 */

import testSubject from '../is-uint32-array'

describe('unit:utils/isUint32Array', () => {
  it('should return false if value is not Uint32Array instance', () => {
    expect(testSubject(new Int32Array())).to.be.false
  })

  it('should return true if value is Uint32Array instance', () => {
    expect(testSubject(new Uint32Array())).to.be.true
  })
})
