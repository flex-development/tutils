/**
 * @file Type Tests - IfObject
 * @module tutils/types/tests/unit-d/IfObject
 */

import type TestSubject from '../if-object'
import type Nilable from '../nilable'

describe('unit-d:types/IfObject', () => {
  type F = 0
  type T = 1

  it('should equal F if IsObject<U> extends false', () => {
    expectTypeOf<TestSubject<string, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsObject<U> extends true', () => {
    expectTypeOf<TestSubject<object, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<object>, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
