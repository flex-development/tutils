/**
 * @file Unit Tests - diff
 * @module tutils/utils/tests/unit/diff
 */

import testSubject from '../diff'

describe('unit:utils/diff', () => {
  it('should return difference between array1 and array2', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, number[]][] = [
      [[0, 1], [0, 1], null, []],
      [[0, 1, 2], [2, 3, 4], undefined, [0, 1]],
      [[0, 1, 2], [3, 4, 5], undefined, [0, 1, 2]]
    ]

    // Act + Expect
    cases.forEach(([array1, array2, identity, expected]) => {
      expect(testSubject(array1, array2, identity)).to.deep.equal(expected)
    })
  })
})
