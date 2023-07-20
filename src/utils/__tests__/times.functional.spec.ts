/**
 * @file Functional Tests - times
 * @module tutils/utils/tests/functional/times
 */

import type { Fn } from '#src/types'
import type { Spy } from '#tests/interfaces'
import testSubject from '../times'

describe('functional:utils/times', () => {
  let iteratee: Spy<Fn<[number], number>>

  beforeAll(() => {
    iteratee = vi.fn(i => i ** i)
  })

  it('should call iteratee n times', () => {
    // Arrange
    const n: number = 5

    // Act
    testSubject(n, iteratee)

    // Expect
    expect(iteratee).toHaveBeenCalledTimes(n)
  })
})
