/**
 * @file Type Tests - IfUniqueSymbol
 * @module tutils/types/tests/unit-d/IfUniqueSymbol
 */

import type { tag as empty } from '../empty-object'
import type TestSubject from '../if-symbol-unique'
import type Nilable from '../nilable'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/IfUniqueSymbol', () => {
  type F = 0
  type T = 1

  it('should equal F if IsUniqueSymbol<U> extends false', () => {
    expectTypeOf<TestSubject<unknown, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsUniqueSymbol<U> extends true', () => {
    expectTypeOf<TestSubject<typeof empty, T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Nilable<typeof opaque>

      // Expect
      expectTypeOf<TestSubject<U, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
