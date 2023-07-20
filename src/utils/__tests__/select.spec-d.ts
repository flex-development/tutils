/**
 * @file Type Tests - select
 * @module tutils/utils/tests/unit-d/select
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../select'

describe('unit-d:utils/select', () => {
  it('should return U[]', () => {
    // Arrange
    type T = Vehicle[]
    type U = Vehicle['vin']

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<U[]>
  })
})
