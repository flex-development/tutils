/**
 * @file Unit Tests - isUint16Array
 * @module tutils/utils/tests/unit/isUint16Array
 */

import testSubject from '../is-uint16-array'

describe('unit:utils/isUint16Array', () => {
  it('should return false if value is not Uint16Array instance', () => {
    expect(testSubject(new Int16Array())).to.be.false
  })

  it('should return true if value is Uint16Array instance', () => {
    expect(testSubject(new Uint16Array())).to.be.true
  })
})
