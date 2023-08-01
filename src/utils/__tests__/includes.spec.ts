/**
 * @file Unit Tests - includes
 * @module tutils/utils/tests/unit/includes
 */

import cast from '../cast'
import testSubject from '../includes'

describe('unit:utils/includes', () => {
  it('should return false if value does not include target', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      ['abc', 'z'],
      ['abc', 'a', 1, null],
      [['a', 'b', 'c'], 'z'],
      [['a', 'b', 'c'], 'a', 1]
    ]

    // Act + Expect
    cases.forEach(([value, target, position, identity]) => {
      expect(testSubject(value, target, position, identity)).to.be.false
    })
  })

  it('should return true if value includes target', () => {
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
    cases.forEach(([value, target, position, identity]) => {
      expect(testSubject(value, target, position, identity)).to.be.true
    })
  })
})
