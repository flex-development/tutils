/**
 * @file Unit Tests - split
 * @module tutils/utils/tests/unit/split
 */

import testSubject from '../split'

describe('unit:utils/split', () => {
  it('should return substring array', () => {
    // Arrange
    const string: string = 'authors.0.email'
    const cases: Parameters<typeof testSubject>[] = [
      [string],
      [string, '.'],
      [string, '.', 1],
      [string, /\./],
      [string, /\./, 1]
    ]

    // Act + Expect
    cases.forEach(([string, delimiter, limit]) => {
      const expected = string.split(delimiter, limit)

      expect(testSubject(string, delimiter, limit)).to.deep.equal(expected)
    })
  })
})
