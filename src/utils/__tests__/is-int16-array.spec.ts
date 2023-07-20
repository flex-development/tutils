/**
 * @file Unit Tests - isInt16Array
 * @module tutils/utils/tests/unit/isInt16Array
 */

import testSubject from '../is-int16-array'

describe('unit:utils/isInt16Array', () => {
  it('should return false if value is not Int16Array instance', () => {
    expect(testSubject(new Uint16Array())).to.be.false
  })

  it('should return true if value is Int16Array instance', () => {
    expect(testSubject(new Int16Array())).to.be.true
  })
})
