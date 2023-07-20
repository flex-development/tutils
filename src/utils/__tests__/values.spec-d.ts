/**
 * @file Type Tests - values
 * @module tutils/utils/tests/unit-d/values
 */

import type Book from '#fixtures/interfaces/book'
import type { Values } from '#src/types'
import type testSubject from '../values'

describe('unit-d:utils/values', () => {
  it('should return Values<T>', () => {
    // Arrange
    type T = Book

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Values<T>>()
  })
})
