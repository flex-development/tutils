/**
 * @file Unit Tests - pull
 * @module tutils/utils/tests/unit/pull
 */

import testSubject from '../pull'

describe('unit:utils/pull', () => {
  it('should return array without items in drop', () => {
    // Arrange
    const array: number[] = [0, 1, 2, 3, 4, 5]
    const drop: number[] = [3, 4, 5]

    // Expect
    expect(testSubject(array, drop, null)).to.deep.equal([0, 1, 2])
  })
})
