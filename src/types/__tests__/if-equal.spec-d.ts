/**
 * @file Type Tests - IfEqual
 * @module tutils/types/tests/unit-d/IfEqual
 */

import type Book from '#fixtures/interfaces/book'
import type Digit from '../digit'
import type TestSubject from '../if-equal'

describe('unit-d:types/IfEqual', () => {
  type F = 0
  type T = 1

  it('should equal F if IsEqual<A, B> extends false', () => {
    expectTypeOf<TestSubject<13, -13, T, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<Book, Digit, T, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsEqual<A, B> extends true', () => {
    expectTypeOf<TestSubject<13, 13, T, F>>().toEqualTypeOf<T>()
    expectTypeOf<TestSubject<Book, Book, T, F>>().toEqualTypeOf<T>()
    expectTypeOf<TestSubject<Digit, Digit, T, F>>().toEqualTypeOf<T>()
  })
})
