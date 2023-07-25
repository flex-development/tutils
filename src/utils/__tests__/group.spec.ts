/**
 * @file Unit Tests - group
 * @module tutils/utils/tests/unit/group
 */

import testSubject from '../group'

describe('unit:utils/group', () => {
  it('should return groups object', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject<number[]>>, object][] = [
      [[], vi.fn(), {}],
      [[3.1, 4.2, 3.3], Math.floor, { 3: [3.1, 3.3], 4: [4.2] }]
    ]

    // Act + Expect
    cases.forEach(([array, identity, expected]) => {
      expect(testSubject(array, identity)).to.eql(expected)
    })
  })
})
