/**
 * @file Type Tests - assignWith
 * @module tutils/utils/tests/unit-d/assignWith
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Assign, Opaque } from '#src/types'
import type testSubject from '../assign-with'

describe('unit-d:utils/assignWith', () => {
  it('should return Assign<T, U>', () => {
    // Arrange
    type T = Vehicle
    type U = [Opaque<unknown, 'vehicle'>]
    type Expect = Assign<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
