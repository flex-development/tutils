/**
 * @file Type Tests - ksort
 * @module tutils/utils/tests/unit-d/ksort
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../ksort'

describe('unit-d:utils/ksort', () => {
  it('should return T', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
