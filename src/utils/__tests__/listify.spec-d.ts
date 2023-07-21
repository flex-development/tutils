/**
 * @file Type Tests - listify
 * @module tutils/utils/tests/unit-d/listify
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../listify'

describe('unit-d:utils/listify', () => {
  it('should return U[]', () => {
    // Arrange
    type T = readonly [Vehicle, Vehicle]
    type U = Vehicle['vin']

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<U[]>()
  })
})
