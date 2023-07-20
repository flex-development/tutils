/**
 * @file Unit Tests - isBuffer
 * @module tutils/utils/tests/unit/isBuffer
 */

import testSubject from '../is-buffer'

describe('unit:utils/isBuffer', () => {
  let array: Uint8Array

  beforeAll(() => {
    array = new Uint8Array()
  })

  it('should return false if value is not Buffer instance', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [array],
      [array.byteLength]
    ]

    // Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is Buffer instance', () => {
    expect(testSubject(Buffer.from(array))).to.be.true
  })
})
