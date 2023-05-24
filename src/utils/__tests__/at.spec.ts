/**
 * @file Unit Tests - at
 * @module tutils/utils/tests/unit/at
 */

import testSubject from '../at'

describe('unit:utils/at', () => {
  it('should return indexed value or fallback', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, unknown][] = [
      ['', 0, '', ''],
      ['abcdef', '1', undefined, 'b'],
      [['a', 'b', 'c', 'd', 'e', 'f'], -1, undefined, 'f']
    ]

    // Act + Expect
    cases.forEach(([value, index, fallback, expected]) => {
      expect(testSubject(value, index, fallback)).to.equal(expected)
    })
  })
})
