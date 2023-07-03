/**
 * @file Type Tests - IfLiteral
 * @module tutils/types/tests/unit-d/IfLiteral
 */

import type TestSubject from '../if-literal'

describe('unit-d:types/IfLiteral', () => {
  type F = 0
  type P = number
  type T = 1

  it('should equal F if IsLiteral<U, P> extends false', () => {
    expectTypeOf<TestSubject<number, P, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, P, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, P, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsLiteral<U, P> extends true', () => {
    expectTypeOf<TestSubject<13, P, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<string | 13, P, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
