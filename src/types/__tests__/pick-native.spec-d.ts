/**
 * @file Type Tests - PickNative
 * @module tutils/types/tests/unit-d/PickNative
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../pick-native'

describe('unit-d:types/PickNative', () => {
  it('should equal typescript.Pick<T, K>', () => {
    // Arrange
    type T = Vehicle
    type K = 'vin'

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Pick<T, K>>
  })
})
