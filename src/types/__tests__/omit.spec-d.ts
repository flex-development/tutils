/**
 * @file Type Tests - Omit
 * @module tutils/types/tests/unit-d/Omit
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type EmptyObject from '../empty-object'
import type TestSubject from '../omit'
import type OmitNative from '../omit-native'

describe('unit-d:types/Omit', () => {
  it('should equal OmitNative<T, K> if K extends keyof T', () => {
    // Arrange
    type T = Book
    type K = 'publisher' | 'readers'

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<OmitNative<T, K>>()
  })

  it('should omit properties with respect for dot notation', () => {
    // Arrange
    type T = Omit<Author, 'display_name'> & { display_name?: { value: string } }
    type K = 'display_name.value' | 'email'

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<{
      display_name?: EmptyObject
      first_name: string
      last_name: string
    }>()
  })
})
