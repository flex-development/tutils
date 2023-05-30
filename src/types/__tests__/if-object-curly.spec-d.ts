/**
 * @file Type Tests - IfObjectCurly
 * @module tutils/types/tests/unit-d/IfObjectCurly
 */

import type Book from '#fixtures/book.interface'
import type TestSubject from '../if-object-curly'

describe('unit-d:types/IfObjectCurly', () => {
  type False = false
  type True = true

  it('should equal False if IsObjectCurly<T> extends false', () => {
    expectTypeOf<TestSubject<null, True, False>>().toEqualTypeOf<False>()
  })

  it('should equal True if IsObjectCurly<T> extends true', () => {
    expectTypeOf<TestSubject<Book, True, False>>().toEqualTypeOf<True>()
  })
})
