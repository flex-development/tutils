/**
 * @file Unit Tests - isFloat64Array
 * @module tutils/utils/tests/unit/isFloat64Array
 */

import testSubject from '../is-float64-array'

describe('unit:utils/isFloat64Array', () => {
  it('should return false if value is not Float64Array instance', () => {
    expect(testSubject(new Float32Array())).to.be.false
  })

  it('should return true if value is Float64Array instance', () => {
    expect(testSubject(new Float64Array())).to.be.true
  })
})
