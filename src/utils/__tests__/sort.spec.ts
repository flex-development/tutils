/**
 * @file Unit Tests - sort
 * @module tutils/utils/tests/unit/sort
 */

import type { Fn } from '#src/types'
import testSubject from '../sort'

describe('unit:utils/sort', () => {
  it('should return sorted copy of array', () => {
    // Arrange
    const array: number[] = [5, 4, 3]
    const compare: Fn<[number, number], number> = (i, j): number => i - j

    // Act
    const result = testSubject(array, compare)

    // Act + Expect
    expect(array).to.deep.equal(array).and.not.deep.equal(result)
    expect(result).to.deep.equal([3, 4, 5])
  })
})
