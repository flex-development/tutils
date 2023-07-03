/**
 * @file Type Tests - IfFalse
 * @module tutils/types/tests/unit-d/IfFalse
 */

import type TestSubject from '../if-false'

describe('unit-d:types/IfFalse', () => {
  type F = 0
  type T = 1

  it('should equal F if IsFalse<U> extends false', () => {
    expectTypeOf<TestSubject<0, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsFalse<U> extends true', () => {
    expectTypeOf<TestSubject<false, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<boolean, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
