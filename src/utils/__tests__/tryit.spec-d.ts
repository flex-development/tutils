/**
 * @file Type Tests - tryit
 * @module tutils/utils/tests/unit-d/tryit
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Fn, Tryit } from '#src/types'
import type testSubject from '../tryit'

describe('unit-d:utils/tryit', () => {
  it('should return Tryit<T, E>', () => {
    // Arrange
    type T = Fn<[Vehicle['vin']], Promise<Vehicle>>
    type E = RangeError
    type Expect = Tryit<T, E>

    // Expect
    expectTypeOf<typeof testSubject<T, E>>().returns.toEqualTypeOf<Expect>()
  })
})
