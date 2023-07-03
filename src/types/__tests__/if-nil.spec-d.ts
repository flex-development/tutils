/**
 * @file Type Tests - IfNil
 * @module tutils/types/tests/unit-d/IfNil
 */

import type TestSubject from '../if-nil'
import type NIL from '../nil'
import type Primitive from '../primitive'

describe('unit-d:types/IfNil', () => {
  type F = 0
  type T = 1

  it('should equal F if IsNil<U> extends false', () => {
    expectTypeOf<TestSubject<NIL[], T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsNil<U> extends true', () => {
    expectTypeOf<TestSubject<NIL, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Primitive, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
