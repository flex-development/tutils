/**
 * @file Type Tests - Tryit
 * @module tutils/types/tests/unit-d/Tryit
 */

import type Book from '#fixtures/book.interface'
import type NumberString from '../number-string'
import type TestSubject from '../tryit'

describe('unit-d:types/Tryit', () => {
  it('should convert T to error-first callback', () => {
    // Arrange
    type T = (id: NumberString) => Promise<Book>
    type R = Promise<[Error, null] | [null, Awaited<ReturnType<T>>]>

    // Expect
    expectTypeOf<TestSubject<T>>().parameters.toEqualTypeOf<Parameters<T>>
    expectTypeOf<TestSubject<T>>().returns.toEqualTypeOf<R>
  })
})
