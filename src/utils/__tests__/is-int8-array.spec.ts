/**
 * @file Unit Tests - isInt8Array
 * @module tutils/utils/tests/unit/isInt8Array
 */

import testSubject from '../is-int8-array'

describe('unit:utils/isInt8Array', () => {
  it('should return false if value is not Int8Array instance', () => {
    expect(testSubject(new Uint8Array())).to.be.false
  })

  it('should return true if value is Int8Array instance', () => {
    expect(testSubject(new Int8Array())).to.be.true
  })
})
