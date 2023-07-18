/**
 * @file Type Tests - IfExactOptionalKey
 * @module tutils/types/tests/unit-d/IfExactOptionalKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type TestSubject from '../if-key-optional-exact'

describe('unit-d:types/IfExactOptionalKey', () => {
  type F = 0
  type T = 1

  it('should equal F if IsExactOptionalKey<U, K> extends false', () => {
    expectTypeOf<TestSubject<Author, 'display_name', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is any', () => {
    expectTypeOf<TestSubject<Author, any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Author, never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, 'display_name', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, 'email', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsExactOptionalKey<U, K> extends true', () => {
    expectTypeOf<TestSubject<Author, 'email', T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Author | Book
      type K = 'display_name' | 'email' | 'publisher'

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
