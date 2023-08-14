/**
 * @file Unit Tests - capitalize
 * @module tutils/utils/tests/unit/capitalize
 */

import testSubject from '../capitalize'

describe('unit:utils/capitalize', () => {
  it('should return capitalized string', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, Capitalize<string>][] = [
      ['', ''],
      [' ', ' '],
      ['foo', 'Foo'],
      ['Foobar', 'Foobar']
    ]

    // Act + Expect
    cases.forEach(([str, expected]) => {
      expect(testSubject(str)).to.equal(expected)
    })
  })
})
