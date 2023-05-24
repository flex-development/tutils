/**
 * @file Type Tests - MergeDefaults
 * @module tutils/types/tests/unit-d/MergeDefaults
 */

import type Author from '#fixtures/author.interface'
import type EmptyArray from '../empty-array'
import type Merge from '../merge'
import type TestSubject from '../merge-defaults'

describe('unit-d:types/MergeDefaults', () => {
  it('should equal T if U extends EmptyArray', () => {
    expectTypeOf<TestSubject<Author, EmptyArray>>().toEqualTypeOf<Author>()
  })

  it('should equal T if U extends EmptyObject', () => {
    expectTypeOf<TestSubject<Author>>().toEqualTypeOf<Author>()
  })

  it('should merge defaults into T if U extends ObjectAny', () => {
    // Arrange
    type U = { email: Lowercase<string>; first_name?: string }
    type Expected = Merge<Author, Omit<U, 'first_name'>>

    // Expect
    expectTypeOf<TestSubject<Author, U>>().toEqualTypeOf<Expected>()
  })

  it('should merge defaults into T if U extends readonly ObjectAny[]', () => {
    // Arrange
    type U1 = { display_name: string; first_name?: string }[]
    type U2 = [{ display_name: string }, { first_name?: string }]
    type E1 = Merge<Author, Omit<U1[0], 'first_name'>>
    type E2 = Merge<Author, U2[0]>

    // Expect
    expectTypeOf<TestSubject<Author, U1>>().toEqualTypeOf<E1>()
    expectTypeOf<TestSubject<Author, U2>>().toEqualTypeOf<E2>()
  })
})
