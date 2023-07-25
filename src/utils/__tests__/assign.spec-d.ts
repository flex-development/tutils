/**
 * @file Type Tests - assign
 * @module tutils/utils/tests/unit-d/assign
 */

import type Book from '#fixtures/interfaces/book'
import type { Assign, Opaque } from '#src/types'
import type testSubject from '../assign'

describe('unit-d:utils/assign', () => {
  it('should return Assign<T, U>', () => {
    // Arrange
    type T = Book
    type U = [Opaque<unknown, 'book'>]
    type Expect = Assign<T, U>

    // Expect
    expectTypeOf<typeof testSubject<T, U>>().returns.toEqualTypeOf<Expect>()
  })
})
