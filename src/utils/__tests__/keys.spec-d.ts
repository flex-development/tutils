/**
 * @file Type Tests - keys
 * @module tutils/utils/tests/unit-d/keys
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Keys } from '#src/types'
import type testSubject from '../keys'

describe('unit-d:utils/keys', () => {
  it('should return Keys<T, K>', () => {
    // Arrange
    type T = { data: Vehicle }
    type K = { deep: true }

    // Expect
    expectTypeOf<typeof testSubject<T, K>>().returns.toEqualTypeOf<Keys<T, K>>()
  })
})
