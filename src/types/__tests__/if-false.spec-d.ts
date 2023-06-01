/**
 * @file Type Tests - IfFalse
 * @module tutils/types/tests/unit-d/IfFalse
 */

import type TestSubject from '../if-false'

describe('unit-d:types/IfFalse', () => {
  type False = false
  type True = true

  it('should equal False if IsFalse<T> extends false', () => {
    expectTypeOf<TestSubject<0, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsFalse<T> extends true', () => {
    expectTypeOf<TestSubject<false, True, False>>().toEqualTypeOf<True>()
  })
})
