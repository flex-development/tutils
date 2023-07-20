/**
 * @file Type Tests - keys
 * @module tutils/utils/tests/unit-d/keys
 */

import type VEHICLE from '#fixtures/vehicle'
import type testSubject from '../keys'

describe('unit-d:utils/keys', () => {
  it('should return Extract<K, string>[]', () => {
    // Arrange
    type K = keyof typeof VEHICLE
    type Expect = Extract<K, string>[]

    // Expect
    expectTypeOf<typeof testSubject<K>>().returns.toEqualTypeOf<Expect>()
  })
})
