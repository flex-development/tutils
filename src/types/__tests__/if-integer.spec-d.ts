/**
 * @file Type Tests - IfInteger
 * @module tutils/types/tests/unit-d/IfInteger
 */

import type TestSubject from '../if-integer'

describe('unit-d:types/IfInteger', () => {
  type F = 0
  type T = 1

  it('should equal F if IsInteger<U> extends false', () => {
    expectTypeOf<TestSubject<'3', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsInteger<U> extends true', () => {
    expectTypeOf<TestSubject<3, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<'3' | 3, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
