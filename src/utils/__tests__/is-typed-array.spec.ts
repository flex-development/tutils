/**
 * @file Unit Tests - isTypedArray
 * @module tutils/utils/tests/unit/isTypedArray
 */

import testSubject from '../is-typed-array'

describe('unit:utils/isTypedArray', () => {
  it('should return false if value is not TypedArray instance', () => {
    expect(testSubject(new ArrayBuffer(8))).to.be.false
  })

  it('should return true if value is TypedArray instance', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [new BigInt64Array()],
      [new BigUint64Array()],
      [new Float32Array()],
      [new Float64Array()],
      [new Int8Array()],
      [new Int16Array()],
      [new Int32Array()],
      [new Uint8Array()],
      [new Uint8ClampedArray()],
      [new Uint16Array()],
      [new Uint32Array()]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
