/**
 * @file Type Tests - IfJsonPrimitive
 * @module tutils/types/tests/unit-d/IfJsonPrimitive
 */

import type TestSubject from '../if-json-primitive'
import type JsonPrimitive from '../json-primitive'

describe('unit-d:types/IfJsonPrimitive', () => {
  type False = false
  type True = true

  it('should equal False if IsJsonPrimitive<T> extends false', () => {
    expectTypeOf<
      TestSubject<JsonPrimitive[], True, False>
    >().toEqualTypeOf<False>()
  })

  it('should equal True if IsJsonPrimitive<T> extends true', () => {
    expectTypeOf<
      TestSubject<JsonPrimitive, True, False>
    >().toEqualTypeOf<True>()
  })
})
