/**
 * @file Type Tests - iterate
 * @module tutils/utils/tests/unit-d/iterate
 */

import type testSubject from '../iterate'

describe('unit-d:utils/iterate', () => {
  it('should return T', () => {
    // Arrange
    type T = number

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
