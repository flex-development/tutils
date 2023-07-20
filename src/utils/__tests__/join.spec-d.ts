/**
 * @file Type Tests - join
 * @module tutils/utils/tests/unit-d/join
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Dot, Join, Numeric } from '#src/types'
import type testSubject from '../join'

describe('unit-d:utils/join', () => {
  it('should return J', () => {
    // Arrange
    type T = Vehicle[]
    type J = Join<['vehicles', Numeric, Vehicle['vin']], Dot>

    // Expect
    expectTypeOf<typeof testSubject<T, J>>().returns.toEqualTypeOf<J>()
  })
})
