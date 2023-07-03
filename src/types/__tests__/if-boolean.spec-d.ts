/**
 * @file Type Tests - IfBoolean
 * @module tutils/types/tests/unit-d/IfBoolean
 */

import type TestSubject from '../if-boolean'
import type Primitive from '../primitive'

describe('unit-d:types/IfBoolean', () => {
  type F = 0
  type T = 1

  it('should equal F if IsBoolean<U> extends false', () => {
    expectTypeOf<TestSubject<boolean[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsBoolean<U> extends true', () => {
    expectTypeOf<TestSubject<boolean, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
