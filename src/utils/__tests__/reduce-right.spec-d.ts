/**
 * @file Type Tests - reduceRight
 * @module tutils/utils/tests/unit-d/reduceRight
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../reduce-right'

describe('unit-d:utils/reduceRight', () => {
  it('should return U', () => {
    // Arrange
    type T = Vehicle['vin']
    type U = Vehicle

    // Expect
    expectTypeOf<typeof testSubject<U, T>>().returns.toEqualTypeOf<U>()
  })
})
