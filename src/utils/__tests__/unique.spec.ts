/**
 * @file Unit Tests - unique
 * @module tutils/utils/tests/unit/unique
 */

import testSubject from '../unique'

describe('unit:utils/unique', () => {
  it('should return array if items are already unique', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[]],
      [[{ email: faker.internet.email() }]]
    ]

    // Act + Expect
    cases.forEach(([array]) => expect(testSubject(array)).to.deep.equal(array))
  })

  it('should return array with duplicates removed', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, (readonly any[])?][] = [
      [[0, 0, 1, 1, 2, 2], undefined, [0, 1, 2]],
      [[{ value: 1 }, { value: 1 }, { value: 1 }], undefined, [{ value: 1 }]],
      [[3, 3, 4, 4, 5, 5], item => (item as number).toString(), [3, 4, 5]]
    ]

    // Act + Expect
    cases.forEach(([array, identity, expected = array]) => {
      expect(testSubject(array, identity)).to.deep.equal(expected)
    })
  })
})
