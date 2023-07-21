/**
 * @file Unit Tests - truncate
 * @module tutils/utils/tests/unit/truncate
 */

import DOT from '../dot'
import testSubject from '../truncate'

describe('unit:utils/truncate', () => {
  let suf: string

  beforeAll(() => {
    suf = DOT.repeat(3)
  })

  it('should return truncated string that ends with suffix', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, string][] = [
      ['beep boop', -7, null, 'beep' + suf],
      ['hello world', 8, undefined, 'hello' + suf]
    ]

    // Act + Expect
    cases.forEach(([str, length, suffix, expected]) => {
      expect(testSubject(str, length, suffix))
        .to.be.of.length(Math.abs(length))
        .and.endWith(suffix ?? suf)
        .and.equal(expected)
    })
  })
})
