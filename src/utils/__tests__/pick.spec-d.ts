/**
 * @file Type Tests - pick
 * @module tutils/utils/tests/unit-d/pick
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Pick } from '#src/types'
import type testSubject from '../pick'

describe('unit-d:utils/pick', () => {
  it('should return Pick<T, K>', () => {
    // Arrange
    type T = Vehicle
    type K = 'vin'

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Pick<T, K>>()
  })
})
