/**
 * @file Type Tests - intersection
 * @module tutils/utils/tests/unit-d/intersection
 */

import type testSubject from '../intersection'

describe('unit-d:utils/intersection', () => {
  it('should return T[]', () => {
    // Arrange
    type T = number

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T[]>()
  })
})
