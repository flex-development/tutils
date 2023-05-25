/**
 * @file Unit Tests - select
 * @module tutils/utils/tests/unit/select
 */

import testSubject from '../select'

describe('unit:utils/select', () => {
  it('should return array if filter and map are omitted', () => {
    // Arrange
    const array: number[] = [0, 1, 2, 3, 4, 5]

    // Expect
    expect(testSubject(array)).to.deep.equal(array)
  })
})
