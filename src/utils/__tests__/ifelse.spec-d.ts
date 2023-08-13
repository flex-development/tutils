/**
 * @file Type Tests - ifelse
 * @module tutils/utils/tests/unit-d/ifelse
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Ifelse, Integer, NaN, Partial } from '#src/types'
import type testSubject from '../ifelse'

describe('unit-d:utils/ifelse', () => {
  it('should return Ifelse<U, T, F>', () => {
    // Arrange
    type U = Partial<Vehicle>['vin' | 'year']
    type F = NaN
    type T = Integer
    type Expect = Ifelse<U, T, F>

    // Expect
    expectTypeOf<typeof testSubject<U, T, F>>().returns.toEqualTypeOf<Expect>()
  })
})
