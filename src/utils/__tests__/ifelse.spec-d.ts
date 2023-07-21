/**
 * @file Type Tests - ifelse
 * @module tutils/utils/tests/unit-d/ifelse
 */

import type { Booleanish } from '#src/types'
import type testSubject from '../ifelse'

describe('unit-d:utils/ifelse', () => {
  it('should return F | T', () => {
    // Arrange
    type U = Booleanish
    type F = 0
    type T = 1

    // Expect
    expectTypeOf<typeof testSubject<U, T, F>>().returns.toEqualTypeOf<F | T>()
  })
})
