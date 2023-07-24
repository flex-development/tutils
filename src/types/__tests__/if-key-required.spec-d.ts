/**
 * @file Type Tests - IfRequiredKey
 * @module tutils/types/tests/unit-d/IfRequiredKey
 */

import type Author from '#fixtures/interfaces/author'
import type Book from '#fixtures/interfaces/book'
import type TestSubject from '../if-key-required'

describe('unit-d:types/IfRequiredKey', () => {
  type F = 0
  type T = 1

  it('should equal F if IsRequiredKey<U, K> extends false', () => {
    expectTypeOf<TestSubject<Author, 'email', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is any', () => {
    expectTypeOf<TestSubject<Author, any, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if K is never', () => {
    expectTypeOf<TestSubject<Author, never, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal F if U is never', () => {
    expectTypeOf<TestSubject<never, 'first_name', T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsRequiredKey<U, K> extends true', () => {
    expectTypeOf<TestSubject<Author, 'first_name', T, F>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type U = Author | Book
      type K = 'email' | 'first_name' | 'isbn' | 'publisher'

      // Expect
      expectTypeOf<TestSubject<U, K, T, F>>().toEqualTypeOf<F | T>()
    })
  })
})
