/**
 * @file Type Tests - IfString
 * @module tutils/types/tests/unit-d/IfString
 */

import type TestSubject from '../if-string'
import type Primitive from '../primitive'

describe('unit-d:types/IfString', () => {
  type F = 0
  type T = 1

  it('should equal F if IsString<U> extends false', () => {
    expectTypeOf<TestSubject<string[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsString<U> extends true', () => {
    expectTypeOf<TestSubject<string, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
