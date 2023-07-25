/**
 * @file Type Tests - chunk
 * @module tutils/utils/tests/unit-d/chunk
 */

import type Vehicle from '#fixtures/types/vehicle'
import type testSubject from '../chunk'

describe('unit-d:utils/chunk', () => {
  it('should return T[number][][]', () => {
    // Arrange
    type T = (Vehicle | Vehicle['vin'])[]

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T[number][][]>()
  })
})
