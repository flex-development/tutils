/**
 * @file Unit Tests - flat
 * @module tutils/utils/tests/unit/flat
 */

import testSubject from '../flat'

describe('unit:utils/flat', () => {
  it('should return empty array if arr is null', () => {
    expect(testSubject(null)).to.eql([])
  })

  it('should return empty array if arr is undefined', () => {
    expect(testSubject(undefined)).to.eql([])
  })

  it('should return flattened array', () => {
    // Arrange
    const arr: [1, [2], [[3, [4]], 5]] = [1, [2], [[3, [4]], 5]]

    // Act
    const result = testSubject(arr, 3)

    // Expect
    expect(result).to.eql([1, 2, 3, 4, 5]).but.not.equal(arr)
  })
})
