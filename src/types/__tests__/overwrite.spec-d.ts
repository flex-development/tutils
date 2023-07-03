/**
 * @file Type Tests - Overwrite
 * @module tutils/types/tests/unit-d/Overwrite
 */

import type Author from '#fixtures/author.interface'
import type Book from '#fixtures/book.interface'
import type Person from '#fixtures/person.interface'
import type Vehicle from '#fixtures/vehicle'
import type Assign from '../assign'
import type EmptyArray from '../empty-array'
import type EmptyObject from '../empty-object'
import type OneOrMany from '../one-or-many'
import type { tag } from '../opaque'
import type TestSubject from '../overwrite'

describe('unit-d:types/Overwrite', () => {
  it('should equal T if U is any', () => {
    expectTypeOf<TestSubject<Vehicle, any>>().toEqualTypeOf<Vehicle>()
  })

  it('should equal T if U is never', () => {
    expectTypeOf<TestSubject<Person, never>>().toEqualTypeOf<Person>()
  })

  describe('U extends ObjectCurly', () => {
    type T = Author & { id?: string }

    it('should assign mutual properties of U to T', () => {
      // Arrange
      type U = { foo: string; readonly id: string }
      type Expect = Assign<T, Pick<U, 'id'>>

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
    })

    it('should equal T if Keyof<U> is never', () => {
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, {}>>().toEqualTypeOf<T>()
    })
  })

  describe('U extends readonly ObjectCurly[]', () => {
    type T = Book & { [tag]?: 'book'; id?: string }

    it('should equal T if U extends readonly EmptyObject[]', () => {
      // Arrange
      type U1 = (EmptyObject | {})[]
      type U2 = [EmptyObject, EmptyObject, {}, {}]
      type U3 = Readonly<U1>
      type U4 = Readonly<U2>

      // Expect
      expectTypeOf<TestSubject<T, U1>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U2>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U3>>().toEqualTypeOf<T>()
      expectTypeOf<TestSubject<T, U4>>().toEqualTypeOf<T>()
    })

    describe('U extends readonly [infer H, ...infer R]', () => {
      it('should assign mutual properties of U[i] to T', () => {
        // Arrange
        type U = [
          { readonly foo: string },
          { readonly [tag]?: 'book' },
          { readonly id?: string },
          { readonly publisher?: string },
          any,
          never,
          { readonly foo: string },
          { readonly [tag]: 'book' },
          { readonly id: string },
          { readonly publisher: string },
          { readonly readers: number }
        ]

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<
          Omit<T, typeof tag | 'publisher' | 'readers'> &
            U[7] &
            U[8] &
            U[9] &
            U[10]
        >()
      })

      it('should equal T if U extends Readonly<EmptyArray>', () => {
        expectTypeOf<TestSubject<T, EmptyArray>>().toEqualTypeOf<T>()
        expectTypeOf<TestSubject<T, Readonly<EmptyArray>>>().toEqualTypeOf<T>()
      })
    })

    describe('number extends Length<U>', () => {
      it('should assign mutual properties of U[0] to T', () => {
        // Arrange
        type U = { foo: string; readonly id: string }[]
        type Expect = Assign<T, Pick<U[0], 'id'>>

        // Expect
        expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expect>()
      })
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Partial<Person | Vehicle>
      type U = OneOrMany<Person | Vehicle>

      // Expect
      expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Person | T | Vehicle>()
    })
  })
})
