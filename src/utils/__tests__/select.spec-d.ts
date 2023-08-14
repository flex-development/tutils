/**
 * @file Type Tests - select
 * @module tutils/utils/tests/unit-d/select
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Nilable, Values } from '#src/types'
import type testSubject from '../select'

describe('unit-d:utils/select', () => {
  it('should return U[]', () => {
    // Arrange
    type T = Nilable<Vehicle['vin']>[]
    type F = string
    type U = NonNullable<Values<T>[number]>

    // Expect
    expectTypeOf<typeof testSubject<T, F, U>>().returns.toEqualTypeOf<U[]>
  })
})
