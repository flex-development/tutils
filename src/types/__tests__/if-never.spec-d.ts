/**
 * @file Type Tests - IfNever
 * @module tutils/types/tests/unit-d/IfNever
 */

import type TestSubject from '../if-never'

describe('unit-d:types/IfNever', () => {
  type False = false
  type True = true

  it('should equal False if IsNever<T> extends false', () => {
    expectTypeOf<TestSubject<never[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsNever<T> extends true', () => {
    expectTypeOf<TestSubject<never, True, False>>().toEqualTypeOf<True>()
  })
})
