/**
 * @file Type Tests - define
 * @module tutils/utils/tests/unit-d/define
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Opaque } from '#src/types'
import type testSubject from '../define'

describe('unit-d:utils/define', () => {
  it('should return U', () => {
    // Arrange
    type T = Vehicle
    type U = Opaque<Vehicle, 'vehicle'>

    // Expect
    expectTypeOf<typeof testSubject<T, string, U>>().returns.toEqualTypeOf<U>()
  })
})
