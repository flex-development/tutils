/**
 * @file Type Tests - IfIndexSignature
 * @module tutils/types/tests/unit-d/IfIndexSignature
 */

import type TestSubject from '../if-index-signature'
import type Nilable from '../nilable'
import type PropertyKey from '../property-key'

describe('unit-d:types/IfIndexSignature', () => {
  type F = 0
  type T = 1

  it('should equal F if IsIndexSignature<U, K> extends false', () => {
    expectTypeOf<TestSubject<string[], 3, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is any', () => {
    expectTypeOf<TestSubject<string[], any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<string, never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, number, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, number, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsIndexSignature<U, K> extends true', () => {
    // Arrange
    type U = { [x: number]: any; [x: string]: any; [x: symbol]: any }

    // Expect
    expectTypeOf<TestSubject<U, number, T, F>>().toEqualTypeOf<T>()
    expectTypeOf<TestSubject<U, string, T, F>>().toEqualTypeOf<T>()
    expectTypeOf<TestSubject<U, symbol, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Nilable<string>
      type K = PropertyKey

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
