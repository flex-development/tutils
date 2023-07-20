/**
 * @file Unit Tests - isFloat32Array
 * @module tutils/utils/tests/unit/isFloat32Array
 */

import testSubject from '../is-float32-array'

describe('unit:utils/isFloat32Array', () => {
  it('should return false if value is not Float32Array instance', () => {
    expect(testSubject(new Float64Array())).to.be.false
  })

  it('should return true if value is Float32Array instance', () => {
    expect(testSubject(new Float32Array())).to.be.true
  })
})
