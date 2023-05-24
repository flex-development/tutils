/**
 * @file Unit Tests - fork
 * @module tutils/utils/tests/unit/fork
 */

import type { Fn } from '#src/types'
import testSubject from '../fork'

describe('unit:utils/fork', () => {
  let array: number[]

  beforeAll(() => {
    array = [0, 1, 2, 3, 4]
  })

  it('should return condition groups', () => {
    // Arrange
    const condition: Fn<[number, number], boolean> = (n: number) => n >= 3

    // Act + Expect
    expect(testSubject(array, condition)).to.deep.equal([
      [3, 4],
      [0, 1, 2]
    ])
  })
})
