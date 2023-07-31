/**
 * @file Type Tests - omit
 * @module tutils/utils/tests/unit-d/omit
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Omit, Spread } from '#src/types'
import type testSubject from '../omit'

describe('unit-d:utils/omit', () => {
  it('should return Omit<Spread<T>, K>', () => {
    // Arrange
    type T = Readonly<Vehicle>
    type K = 'make' | 'model' | 'year'
    type Expect = Omit<Spread<T>, K>

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Expect>()
  })
})
