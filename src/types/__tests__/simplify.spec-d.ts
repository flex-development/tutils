/**
 * @file Type Tests - Simplify
 * @module tutils/types/tests/unit-d/Simplify
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type ObjectPlain from '../object-plain'
import type TestSubject from '../simplify'

describe('unit-d:types/Simplify', () => {
  it('should simplify complex type', () => {
    expectTypeOf<TestSubject<Book>>().toEqualTypeOf<Book>()
    expectTypeOf<TestSubject<Book>>().toMatchTypeOf<ObjectPlain>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Author | Book

      // Expect
      expectTypeOf<keyof TestSubject<T>>().toBeNever()
      expectTypeOf<TestSubject<T>>().toMatchTypeOf<ObjectPlain>()
    })
  })
})
