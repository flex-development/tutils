/**
 * @file Type Tests - cast
 * @module tutils/utils/tests/unit-d/cast
 */

import type testSubject from '../cast'

describe('unit-d:utils/cast', () => {
  it('should return R', () => {
    // Arrange
    type R = string

    // Expect
    expectTypeOf<typeof testSubject<R>>().returns.toEqualTypeOf<R>()
  })
})
