/**
 * @file Type Tests - IfTrue
 * @module tutils/types/tests/unit-d/IfTrue
 */

import type TestSubject from '../if-true'

describe('unit-d:types/IfTrue', () => {
  type F = 0
  type T = 1

  it('should equal F if IsTrue<U> extends false', () => {
    expectTypeOf<TestSubject<1, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsTrue<U> extends true', () => {
    expectTypeOf<TestSubject<true, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<boolean, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
