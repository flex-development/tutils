/**
 * @file Type Tests - IfSymbol
 * @module tutils/types/tests/unit-d/IfSymbol
 */

import type TestSubject from '../if-symbol'
import type Primitive from '../primitive'

describe('unit-d:types/IfSymbol', () => {
  type F = 0
  type T = 1

  it('should equal F if IsSymbol<U> extends false', () => {
    expectTypeOf<TestSubject<symbol[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsSymbol<U> extends true', () => {
    expectTypeOf<TestSubject<symbol, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
