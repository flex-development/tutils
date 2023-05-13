/**
 * @file Type Tests - IfFunction
 * @module tutils/types/tests/unit-d/IfFunction
 */

import type Fn from '../fn'
import type TestSubject from '../if-function'

describe('unit-d:types/IfFunction', () => {
  type False = false
  type True = true

  it('should equal False if IsFunction<T> extends false', () => {
    expectTypeOf<TestSubject<Fn[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsFunction<T> extends true', () => {
    expectTypeOf<TestSubject<Fn, True, False>>().toEqualTypeOf<True>()
  })
})
