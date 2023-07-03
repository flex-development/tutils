/**
 * @file Type Tests - IfFunction
 * @module tutils/types/tests/unit-d/IfFunction
 */

import type Fn from '../fn'
import type TestSubject from '../if-function'
import type Nilable from '../nilable'

describe('unit-d:types/IfFunction', () => {
  type F = 0
  type T = 1

  it('should equal F if IsFunction<U> extends false', () => {
    expectTypeOf<TestSubject<readonly Fn[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsFunction<U> extends true', () => {
    expectTypeOf<TestSubject<Function, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<Fn>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
