/**
 * @file Unit Tests - range
 * @module tutils/utils/tests/unit/range
 */

import testSubject from '../range'

describe('unit:utils/range', () => {
  describe('range generator', () => {
    let toList: <T = number>(generator: Generator<T>) => T[]

    beforeAll(() => {
      toList = <T = number>(generator: Generator<T>): T[] => [...generator]
    })

    it('should yield expected values', () => {
      // Arrange
      const cases: [...Parameters<typeof testSubject>, unknown[]][] = [
        [0, 5, 2, null, [0, 2, 4]],
        [5, null, 2, null, [0, 2, 4]],
        [0, 5, null, null, [0, 1, 2, 3, 4, 5]],
        [5, null, null, null, [0, 1, 2, 3, 4, 5]],
        [0, 5, null, 'x', ['x', 'x', 'x', 'x', 'x', 'x']],
        [0, 5, null, (i: number) => i * i, [0, 1, 4, 9, 16, 25]],
        [5, null, null, (i: number) => i * i, [0, 1, 4, 9, 16, 25]]
      ]

      // Act + Expect
      cases.forEach(([min, max, step, map, expected]) => {
        expect(toList(testSubject(min, max, step, map))).to.eql(expected)
      })
    })
  })
})
