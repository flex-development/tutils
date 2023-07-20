/**
 * @file Unit Tests - sort
 * @module tutils/utils/tests/unit/sort
 */

import type { Fn } from '#src/types'
import testSubject from '../sort'

describe('unit:utils/sort', () => {
  it('should return sorted copy of arr', () => {
    // Arrange
    const arr: number[] = [5, 4, 3]
    const compare: Fn<[number, number], number> = (i, j): number => i - j

    // Act + Expect
    expect(testSubject(arr, compare)).to.eql([3, 4, 5]).but.not.equal(arr)
  })
})
