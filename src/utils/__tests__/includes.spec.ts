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
      ['abc', 'a', null, 1],
      [['a', 'b', 'c'], 'z'],
      [['a', 'b', 'c'], 'a', undefined, 1]
    ]

    // Act + Expect
    cases.forEach(([value, target, identity, position]) => {
      expect(testSubject(value, target, identity, position)).to.be.false
    })
  })

  it('should return true if value includes target', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      ['foobar', 'foo'],
      ['foobar', 'bar', null, 3],
      [[faker.number.int(), { x: 0, y: 0 }], { x: 0, y: 0 }, undefined, 1],
      [
        [faker.number.int(), { x: 0, y: 0 }],
        { x: 0, y: 0 },
        item => {
          const { x, y = Number.NaN } = cast<{ x: number; y?: number }>(item)
          return `[${x},${y}]`
        },
        1
      ]
    ]

    // Act + Expect
    cases.forEach(([value, target, identity, position]) => {
      expect(testSubject(value, target, identity, position)).to.be.true
    })
  })
})
