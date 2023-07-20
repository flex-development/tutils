/**
 * @file Type Tests - times
 * @module tutils/utils/tests/unit-d/times
 */

import type { Times } from '#src/types'
import type testSubject from '../times'

describe('unit-d:utils/times', () => {
  it('should return Times<N, T>', () => {
    // Arrange
    type N = 5
    type T = number
    type Expect = Times<N, T>

    // Expect
    expectTypeOf<typeof testSubject<N, T>>().returns.toEqualTypeOf<Expect>()
  })
})
