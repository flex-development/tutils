/**
 * @file Type Tests - IfArray
 * @module tutils/types/tests/unit-d/IfArray
 */

import type TestSubject from '../if-array'
import type OneOrMany from '../one-or-many'

describe('unit-d:types/IfArray', () => {
  type F = 0
  type T = 1
  type V = string

  it('should equal F if IsArray<U, V> extends false', () => {
    expectTypeOf<TestSubject<V, V, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, V, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, V, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsArray<U, V> extends true', () => {
    expectTypeOf<TestSubject<V[], V, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<OneOrMany<V>, V, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
