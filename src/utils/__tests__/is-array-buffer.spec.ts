/**
 * @file Unit Tests - isArrayBuffer
 * @module tutils/utils/tests/unit/isArrayBuffer
 */

import testSubject from '../is-array-buffer'

describe('unit:utils/isArrayBuffer', () => {
  it('should return false if value is not ArrayBuffer instance', () => {
    expect(testSubject(new Map())).to.be.false
  })

  it('should return true if value is ArrayBuffer instance', () => {
    expect(testSubject(new ArrayBuffer(8))).to.be.true
  })
})
