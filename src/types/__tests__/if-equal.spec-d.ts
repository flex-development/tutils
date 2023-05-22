/**
 * @file Type Tests - IfEqual
 * @module tutils/types/tests/unit-d/IfEqual
 */

import type Book from '#fixtures/book.interface'
import type Digit from '../digit'
import type TestSubject from '../if-equal'

describe('unit-d:types/IfEqual', () => {
  type False = false
  type True = true

  it('should equal False if IsEqual<A, B> extends false', () => {
    expectTypeOf<TestSubject<13, -13, True, False>>().toEqualTypeOf<False>()
    expectTypeOf<TestSubject<Book, Digit, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsEqual<A, B> extends true', () => {
    expectTypeOf<TestSubject<13, 13, True, False>>().toEqualTypeOf<True>()
    expectTypeOf<TestSubject<Book, Book, True, False>>().toEqualTypeOf<True>()
    expectTypeOf<TestSubject<Digit, Digit, True, False>>().toEqualTypeOf<True>()
  })
})
