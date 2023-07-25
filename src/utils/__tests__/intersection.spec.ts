/**
 * @file Unit Tests - intersection
 * @module tutils/utils/tests/unit/intersection
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import cast from '../cast'
import testSubject from '../intersection'

describe('unit:utils/intersection', () => {
  let today: Date

  beforeAll(() => {
    today = new Date()
  })

  it('should return intersection of array1 and array2', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, readonly unknown[]][] = [
      [[], [], undefined, []],
      [[{ value: FLOAT }], [{ value: INTEGER }], undefined, []],
      [[INTEGER], [FLOAT, INTEGER], undefined, [INTEGER]],
      [
        [today],
        [faker.date.future(), today],
        item => cast<Date>(item).toISOString(),
        [today]
      ]
    ]

    // Act + Expect
    cases.forEach(([array1, array2, identity, expected]) => {
      expect(testSubject(array1, array2, identity)).to.eql(expected)
    })
  })
})
