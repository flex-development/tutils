/**
 * @file Type Tests - IfPrimitive
 * @module tutils/types/tests/unit-d/IfPrimitive
 */

import type TestSubject from '../if-primitive'
import type Primitive from '../primitive'

describe('unit-d:types/IfPrimitive', () => {
  type False = false
  type True = true

  it('should equal False if IsPrimitive<T> extends false', () => {
    expectTypeOf<TestSubject<Primitive[], True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsPrimitive<T> extends true', () => {
    expectTypeOf<TestSubject<Primitive, True, False>>().toEqualTypeOf<True>()
  })
})
