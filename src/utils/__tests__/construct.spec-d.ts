/**
 * @file Type Tests - construct
 * @module tutils/utils/tests/unit-d/construct
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Construct, Crush } from '#src/types'
import type testSubject from '../construct'

describe('unit-d:utils/construct', () => {
  it('should return Construct<T>', () => {
    // Arrange
    type T = Crush<Vehicle & { driver: { nanoid: string } }>

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Construct<T>>()
  })
})
