/**
 * @file Type Tests - OmitNative
 * @module tutils/types/tests/unit-d/OmitNative
 */

import type Vehicle from '#fixtures/types/vehicle'
import type TestSubject from '../omit-native'

describe('unit-d:types/OmitNative', () => {
  it('should equal typescript.Omit<T, K>', () => {
    // Arrange
    type T = Vehicle
    type K = Exclude<keyof T, 'vin'>

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Omit<T, K>>
  })
})
