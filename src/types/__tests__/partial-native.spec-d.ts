/**
 * @file Type Tests - PartialNative
 * @module tutils/types/tests/unit-d/PartialNative
 */

import type Vehicle from '#fixtures/vehicle'
import type TestSubject from '../partial-native'

describe('unit-d:types/PartialNative', () => {
  it('should equal typescript.Partial<T>', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Partial<T>>
  })
})
