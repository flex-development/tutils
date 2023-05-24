/**
 * @file Unit Tests - count
 * @module tutils/utils/tests/unit/count
 */

import type { Fn } from '#src/types'
import testSubject from '../count'

describe('unit:utils/count', () => {
  let array: number[]

  beforeAll(() => {
    array = [0, 1, 2, 3, 4]
  })

  it('should return array length if condition is omitted', () => {
    expect(testSubject(array)).to.equal(array.length)
  })

  it('should return number of items in array that meet condition', () => {
    // Arrange
    const condition: Fn<[number, number], boolean> = (n: number) => n >= 3

    // Act + Expect
    expect(testSubject(array, condition)).to.equal(2)
  })
})
