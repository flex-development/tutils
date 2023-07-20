/**
 * @file Type Tests - clone
 * @module tutils/utils/tests/unit-d/clone
 */

import type VEHICLE from '#fixtures/vehicle'
import type testSubject from '../clone'

describe('unit-d:utils/clone', () => {
  it('should return T', () => {
    // Arrange
    type T = typeof VEHICLE

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<T>()
  })
})
