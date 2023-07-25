/**
 * @file Type Tests - crush
 * @module tutils/utils/tests/unit-d/crush
 */

import type Book from '#fixtures/interfaces/book'
import type { Crush } from '#src/types'
import type testSubject from '../crush'

describe('unit-d:utils/crush', () => {
  it('should return Crush<T>', () => {
    // Arrange
    type T = Book

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Crush<T>>()
  })
})
