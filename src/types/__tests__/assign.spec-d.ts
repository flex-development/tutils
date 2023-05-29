/**
 * @file Type Tests - Assign
 * @module tutils/types/tests/unit-d/Assign
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../assign'
import type EmptyArray from '../empty-array'
import type Merge from '../merge'

describe('unit-d:types/Assign', () => {
  it('should equal T if U extends EmptyArray', () => {
    expectTypeOf<TestSubject<Author, EmptyArray>>().toEqualTypeOf<Author>()
  })

  it('should equal T if U extends EmptyObject', () => {
    expectTypeOf<TestSubject<Author>>().toEqualTypeOf<Author>()
  })

  it('should merge U into T if U extends ObjectCurly', () => {
    // Arrange
    type U = { email: Lowercase<string> }

    // Expect
    expectTypeOf<TestSubject<Author, U>>().toEqualTypeOf<Merge<Author, U>>()
  })

  it('should merge U into T if U extends readonly ObjectCurly[]', () => {
    // Arrange
    type U1 = [{ display_name: string }, { email: Lowercase<string> }]
    type U2 = { display_name: string; email: Lowercase<string> }[]
    type E1 = Merge<Merge<Author, U1[0]>, U1[1]>
    type E2 = Merge<Author, U2[0]>

    // Expect
    expectTypeOf<TestSubject<Author, U1>>().toEqualTypeOf<E1>()
    expectTypeOf<TestSubject<Author, U2>>().toEqualTypeOf<E2>()
  })
})
