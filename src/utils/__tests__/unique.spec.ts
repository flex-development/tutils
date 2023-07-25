/**
 * @file Unit Tests - unique
 * @module tutils/utils/tests/unit/unique
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import cast from '../cast'
import testSubject from '../unique'

describe('unit:utils/unique', () => {
  it('should return array with duplicates removed', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, readonly unknown[]][] = [
      [[], null, []],
      [[{ INTEGER }], null, [{ INTEGER }]],
      [[0, 0, 1, 1, 2, 2], null, [0, 1, 2]],
      [[{ value: FLOAT }, { value: FLOAT }], null, [{ value: FLOAT }]],
      [[3, 3, 4, 4, 5, 5], item => cast<number>(item).toString(), [3, 4, 5]]
    ]

    // Act + Expect
    cases.forEach(([arr, identity, expected]) => {
      expect(testSubject(arr, identity)).to.eql(expected)
    })
  })
})
