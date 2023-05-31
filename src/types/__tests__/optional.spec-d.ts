/**
 * @file Type Tests - Optional
 * @module tutils/types/tests/unit-d/Optional
 */

import type TestSubject from '../optional'

describe('unit-d:types/Optional', () => {
  it('should equal T | undefined', () => {
    // Arrange
    type T = string

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T | undefined>()
  })
})
