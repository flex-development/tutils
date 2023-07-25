/**
 * @file Unit Tests - chunk
 * @module tutils/utils/tests/unit/chunk
 */

import testSubject from '../chunk'

describe('unit:utils/chunk', () => {
  let array: readonly string[]

  beforeAll(() => {
    array = ['a', 'b', 'c', 'd', 'e']
  })

  it('should return chunks array', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, string[][]][] = [
      [array, null, [['a', 'b'], ['c', 'd'], ['e']]],
      [array, undefined, [['a', 'b'], ['c', 'd'], ['e']]],
      [
        [...array, 'f'],
        3,
        [
          ['a', 'b', 'c'],
          ['d', 'e', 'f']
        ]
      ]
    ]

    // Act + Expect
    cases.forEach(([array, size, expected]) => {
      expect(testSubject(array, size)).to.eql(expected)
    })
  })
})
