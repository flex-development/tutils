/**
 * @file Unit Tests - includes
 * @module tutils/utils/tests/unit/includes
 */

import cast from '../cast'
import testSubject from '../includes'

describe('unit:utils/includes', () => {
  it('should return false if target does not include value', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [null, '0'],
      ['abc', 'z'],
      ['abc', 'a', 1, null],
      [['a', 'b', 'c'], 'z'],
      [['a', 'b', 'c'], 'a', 1]
    ]

    // Act + Expect
    cases.forEach(([target, value, position, identity]) => {
      expect(testSubject(target, value, position, identity)).to.be.false
    })
  })

  it('should return true if target includes value', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      ['foobar', 'foo'],
      ['foobar', 'bar', 3],
      [[faker.number.int(), { x: 0, y: 0 }], { x: 0, y: 0 }, 1],
      [
        [faker.number.int(), { x: 0, y: 0 }],
        { x: 0, y: 0 },
        1,
        item => {
          const { x, y = Number.NaN } = cast<{ x: number; y?: number }>(item)
          return `[${x},${y}]`
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([target, value, position, identity]) => {
      expect(testSubject(target, value, position, identity)).to.be.true
    })
  })
})
