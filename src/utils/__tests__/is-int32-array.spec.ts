/**
 * @file Unit Tests - isInt32Array
 * @module tutils/utils/tests/unit/isInt32Array
 */

import testSubject from '../is-int32-array'

describe('unit:utils/isInt32Array', () => {
  it('should return false if value is not Int32Array instance', () => {
    expect(testSubject(new Uint32Array())).to.be.false
  })

  it('should return true if value is Int32Array instance', () => {
    expect(testSubject(new Int32Array())).to.be.true
  })
})
