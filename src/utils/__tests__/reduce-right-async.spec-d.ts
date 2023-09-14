/**
 * @file Type Tests - reduceRightAsync
 * @module tutils/utils/tests/unit-d/reduceRightAsync
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../reduce-right-async'

describe('unit-d:utils/reduceRightAsync', () => {
  it('should return Promise<U>', () => {
    // Arrange
    type T = Vehicle['vin']
    type U = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<U, T>>().returns.toEqualTypeOf<Promise<U>>()
  })
})
