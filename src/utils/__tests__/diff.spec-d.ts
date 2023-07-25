/**
 * @file Type Tests - diff
 * @module tutils/utils/tests/unit-d/diff
 */

import type testSubject from '../diff'

describe('unit-d:utils/diff', () => {
  it('should return T[]', () => {
    // Arrange
    type T = number

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T[]>()
  })
})
