/**
 * @file Unit Tests - at
 * @module tutils/utils/tests/unit/at
 */

import testSubject from '../at'

describe('unit:utils/at', () => {
  it('should return fallback if index is not in range', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      ['', 0, ''],
      [[], 1, null],
      [null, faker.number.int(), undefined],
      [undefined, faker.number.int(), null]
    ]

    // Act + Expect
    cases.forEach(([target, index, fallback]) => {
      expect(testSubject(target, index, fallback)).to.equal(fallback)
    })
  })

  it('should return indexed value if index is in range', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, unknown][] = [
      ['abcdef', '1', null, 'b'],
      [['a', 'b', 'c', 'd', 'e', 'f'], -5, null, 'b']
    ]

    // Act + Expect
    cases.forEach(([target, index, fallback, expected]) => {
      expect(testSubject(target, index, fallback)).to.equal(expected)
    })
  })
})
