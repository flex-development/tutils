/**
 * @file Type Tests - reduce
 * @module tutils/utils/tests/unit-d/reduce
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../reduce'

describe('unit-d:utils/reduce', () => {
  it('should return U', () => {
    // Arrange
    type T = Vehicle['vin']
    type U = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<U, T>>().returns.toEqualTypeOf<U>()
  })
})
