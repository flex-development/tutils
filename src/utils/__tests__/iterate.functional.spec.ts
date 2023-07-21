/**
 * @file Functional Tests - iterate
 * @module tutils/utils/tests/functional/iterate
 */

import type { Fn } from '#src/types'
import type { Spy } from '#tests/interfaces'
import testSubject from '../iterate'

describe('functional:utils/iterate', () => {
  let reducer: Spy<Fn<[number, number], number>>

  beforeAll(() => {
    reducer = vi.fn((acc, i) => ++acc * i)
  })

  it('should call reducer n times', () => {
    // Arrange
    const n: number = 5

    // Act
    testSubject(n, 0, reducer)

    // Expect
    expect(reducer).toHaveBeenCalledTimes(n)
  })
})
