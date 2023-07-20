/**
 * @file Unit Tests - select
 * @module tutils/utils/tests/unit/select
 */

import testSubject from '../select'

describe('unit:utils/select', () => {
  it('should return arr if filter and map are omitted', () => {
    // Arrange
    const array: number[] = [0, 1, 2, 3, 4, 5]

    // Expect
    expect(testSubject(array)).to.eql(array)
  })

  it('should return empty array if arr is null', () => {
    expect(testSubject(null)).to.eql([])
  })

  it('should return empty array if arr is undefined', () => {
    expect(testSubject(undefined)).to.eql([])
  })
})
