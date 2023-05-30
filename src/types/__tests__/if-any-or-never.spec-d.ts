/**
 * @file Type Tests - IfAnyOrNever
 * @module tutils/types/tests/unit-d/IfAnyOrNever
 */

import type TestSubject from '../if-any-or-never'

describe('unit-d:types/IfAnyOrNever', () => {
  type False = false
  type True = true

  it('should equal False if IsAnyOrNever<T> extends false', () => {
    expectTypeOf<TestSubject<any[], True, False>>().toEqualTypeOf<False>()
    expectTypeOf<TestSubject<never[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsAnyOrNever<T> extends true', () => {
    expectTypeOf<TestSubject<any, True, False>>().toEqualTypeOf<True>()
    expectTypeOf<TestSubject<never, True, False>>().toEqualTypeOf<True>()
  })
})
