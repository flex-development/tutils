/**
 * @file Type Tests - defaults
 * @module tutils/utils/tests/unit-d/defaults
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Defaults, Partial } from '#src/types'
import type testSubject from '../defaults'

describe('unit-d:utils/defaults', () => {
  it('should return Defaults<T, U>', () => {
    // Arrange
    type T = Partial<Vehicle>
    type U = [{ readonly vrm: number }, { readonly vin: string }]
    type Expect = Defaults<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
