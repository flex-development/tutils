/**
 * @file Type Tests - Get
 * @module tutils/types/tests/unit-d/Get
 */

import type Author from '#fixtures/author.interface'
import type At from '../at'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type EmptyString from '../empty-string'
import type TestSubject from '../get'

describe('unit-d:types/Get', () => {
  type F = undefined

  it('should equal At<T, K, F> if T extends readonly unknown[]', () => {
    // Arrange
    type T1 = [Author]
    type T2 = Author[]

    // Expect
    expectTypeOf<TestSubject<T1, 0>>().toEqualTypeOf<At<T1, 0>>()
    expectTypeOf<TestSubject<T2, 0>>().toEqualTypeOf<At<T2, 0>>()
  })

  it('should equal At<T, K, F> if T extends string', () => {
    // Arrange
    type T1 = 'abc'
    type T2 = string

    // Expect
    expectTypeOf<TestSubject<T1, 0>>().toEqualTypeOf<At<T1, 0>>()
    expectTypeOf<TestSubject<T2, 0>>().toEqualTypeOf<At<T2, 0>>()
  })

  it('should equal F if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray, 0>>().toEqualTypeOf<F>()
  })

  it('should equal F if T extends EmptyObject', () => {
    expectTypeOf<TestSubject<EmptyObject, 'data'>>().toEqualTypeOf<F>()
  })

  it('should equal F if T extends EmptyString', () => {
    expectTypeOf<TestSubject<EmptyString, 1>>().toEqualTypeOf<F>()
  })

  it('should equal T[K & keyof T] if K extends keyof T', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<Author[K]>()
  })

  it('should equal T[K] with respect for dot notation', () => {
    // Arrange
    type AuthorEnhanced = Author & { display_name?: { value: string } }
    type T = {
      authors: [AuthorEnhanced]
      donated_by?: { email: Lowercase<string>; name: string }
      isbn: number
      readers: Map<string, string[]>
      title: string
    }
    type K1 = 'authors.0'
    type K2 = 'authors.0.display_name.value'
    type K3 = 'authors.0.email'
    type K4 = 'authors.-1.email'
    type K5 = 'authors.-2.email'
    type K6 = 'donated_by.name'

    // Expect
    expectTypeOf<TestSubject<T, K1>>().toEqualTypeOf<AuthorEnhanced>()
    expectTypeOf<TestSubject<T, K2>>().toEqualTypeOf<string | undefined>()
    expectTypeOf<TestSubject<T, K3>>().toEqualTypeOf<Lowercase<string>>()
    expectTypeOf<TestSubject<T, K4>>().toEqualTypeOf<Lowercase<string>>()
    expectTypeOf<TestSubject<T, K5>>().toBeUndefined()
    expectTypeOf<TestSubject<T, K6>>().toEqualTypeOf<string | undefined>()
  })
})
