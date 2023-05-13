/**
 * @file Type Tests - IfAny
 * @module tutils/types/tests/unit-d/IfAny
 */

import type TestSubject from '../if-any'

describe('unit-d:types/IfAny', () => {
  type False = false
  type True = true

  it('should equal False if IsAny<T> extends false', () => {
    expectTypeOf<TestSubject<any[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsAny<T> extends true', () => {
    expectTypeOf<TestSubject<any, True, False>>().toEqualTypeOf<True>()
  })
})
