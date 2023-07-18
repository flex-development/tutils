/**
 * @file Type Tests - IfOptionalKey
 * @module tutils/types/tests/unit-d/IfOptionalKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type TestSubject from '../if-key-optional'

describe('unit-d:types/IfOptionalKey', () => {
  type F = 0
  type T = 1

  it('should equal F if IsOptionalKey<U, K> extends false', () => {
    expectTypeOf<TestSubject<Author, 'last_name', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is any', () => {
    expectTypeOf<TestSubject<Author, any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Author, never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is any', () => {
    expectTypeOf<TestSubject<any, 'last_name', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, 'email', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsOptionalKey<U, K> extends true', () => {
    expectTypeOf<TestSubject<Author, 'email', T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Author | Book
      type K = 'email' | 'isbn' | 'last_name' | 'publisher'

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
