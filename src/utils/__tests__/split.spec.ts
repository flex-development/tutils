/**
 * @file Unit Tests - split
 * @module tutils/utils/tests/unit/split
 */

import DOT from '../dot'
import testSubject from '../split'

describe('unit:utils/split', () => {
  let str: string

  beforeAll(() => {
    str = 'hello.world'
  })

  it('should return substring array', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, string[]][] = [
      [null, DOT, undefined, []],
      [null, undefined, undefined, []],
      [str, DOT, 1, str.split(DOT, 1)],
      [str, DOT, undefined, str.split(DOT)],
      [str, undefined, undefined, str.split()]
    ]

    // Act + Expect
    cases.forEach(([string, delimiter, limit, expected]) => {
      expect(testSubject(string, delimiter, limit)).to.deep.equal(expected)
    })
  })
})
