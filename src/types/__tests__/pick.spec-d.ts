/**
 * @file Type Tests - Pick
 * @module tutils/types/tests/unit-d/Pick
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type Publisher from '#fixtures/publisher.interface'
import type TestSubject from '../pick'
import type PickNative from '../pick-native'

describe('unit-d:types/Pick', () => {
  it('should equal PickNative<T, K> if K extends keyof T', () => {
    // Arrange
    type T = Book
    type K = 'isbn' | 'title'

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<PickNative<T, K>>()
  })

  it('should pick properties with respect for dot notation', () => {
    // Arrange
    type K =
      | 'authors.0.display_name'
      | 'authors.0.email'
      | 'isbn'
      | 'publisher.name'
      | 'title'

    // Expect
    expectTypeOf<TestSubject<Book, K>>().toEqualTypeOf<{
      authors: {
        display_name?: Author['display_name']
        email?: Exclude<Author['email'], undefined>
      }[]
      publisher?: PickNative<Publisher, 'name'>
      isbn: Book['isbn']
      title: Book['title']
    }>()
  })
})
