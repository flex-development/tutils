/**
 * @file Type Tests - IfNil
 * @module tutils/types/tests/unit-d/IfNil
 */

import type TestSubject from '../if-nil'
import type NIL from '../nil'

describe('unit-d:types/IfNil', () => {
  type False = false
  type True = true

  it('should equal False if IsNil<T> extends false', () => {
    expectTypeOf<TestSubject<NIL[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsNil<T> extends true', () => {
    expectTypeOf<TestSubject<NIL, True, False>>().toEqualTypeOf<True>()
  })
})
