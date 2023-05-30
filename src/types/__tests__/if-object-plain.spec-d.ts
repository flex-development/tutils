/**
 * @file Type Tests - IfObjectPlain
 * @module tutils/types/tests/unit-d/IfObjectPlain
 */

import type Book from '#fixtures/book.interface'
import type TestSubject from '../if-object-plain'
import type Simplify from '../simplify'

describe('unit-d:types/IfObjectPlain', () => {
  type False = false
  type True = true

  it('should equal False if IsObjectPlain<T> extends false', () => {
    expectTypeOf<TestSubject<Book, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsObjectPlain<T> extends true', () => {
    // Arrange
    type T = Simplify<Book>

    // Expect
    expectTypeOf<TestSubject<T, True, False>>().toEqualTypeOf<True>()
  })
})
