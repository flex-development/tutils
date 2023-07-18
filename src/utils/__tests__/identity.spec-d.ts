/**
 * @file Type Tests - identity
 * @module tutils/utils/tests/unit-d/identity
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../identity'

describe('unit-d:utils/identity', () => {
  it('should return T', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
