/**
 * @file Type Tests - pull
 * @module tutils/utils/tests/unit-d/pull
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { PropertyKey } from '#src/types'
import type testSubject from '../pull'

describe('unit-d:utils/pull', () => {
  it('should return U[]', () => {
    // Arrange
    type T = (Vehicle | Vehicle['vin'])[]
    type K = PropertyKey
    type U = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<T, K, U>>().returns.toEqualTypeOf<U[]>()
  })
})
