/**
 * @file Type Tests - omit
 * @module tutils/utils/tests/unit-d/omit
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Omit } from '#src/types'
import type testSubject from '../omit'

describe('unit-d:utils/omit', () => {
  it('should return Omit<T, K>', () => {
    // Arrange
    type T = Vehicle
    type K = 'make' | 'model' | 'year'

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Omit<T, K>>()
  })
})
