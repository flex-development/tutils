/**
 * @file Type Tests - reduceAsync
 * @module tutils/utils/tests/unit-d/reduceAsync
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../reduce-async'

describe('unit-d:utils/reduceAsync', () => {
  it('should return Promise<U>', () => {
    // Arrange
    type T = Vehicle['vin']
    type U = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<U, T>>().returns.toEqualTypeOf<Promise<U>>()
  })
})
