/**
 * @file Type Tests - IfUndefined
 * @module tutils/types/tests/unit-d/IfUndefined
 */

import type TestSubject from '../if-undefined'
import type Primitive from '../primitive'

describe('unit-d:types/IfUndefined', () => {
  type F = 0
  type T = 1

  it('should equal F if IsUndefined<U> extends false', () => {
    expectTypeOf<TestSubject<undefined[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsUndefined<U> extends true', () => {
    expectTypeOf<TestSubject<undefined, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
