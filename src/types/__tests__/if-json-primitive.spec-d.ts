/**
 * @file Type Tests - IfJsonPrimitive
 * @module tutils/types/tests/unit-d/IfJsonPrimitive
 */

import type TestSubject from '../if-json-primitive'
import type JsonPrimitive from '../json-primitive'
import type Primitive from '../primitive'

describe('unit-d:types/IfJsonPrimitive', () => {
  type F = 0
  type T = 1

  it('should equal F if IsJsonPrimitive<U> extends false', () => {
    expectTypeOf<TestSubject<JsonPrimitive[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsJsonPrimitive<U> extends true', () => {
    expectTypeOf<TestSubject<JsonPrimitive, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
